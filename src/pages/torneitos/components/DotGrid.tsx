import { useEffect, useRef, useCallback } from "react";

const DOT_SPACING = 28;
const DOT_RADIUS = 1.5;
const INFLUENCE_RADIUS = 150;
// const BASE_OPACITY = 0.08;
// const MAX_OPACITY = 0.7;

const DotBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const { x: mx, y: my } = mouseRef.current;

    ctx.clearRect(0, 0, width, height);

    const startCol = Math.max(0, Math.floor((mx - INFLUENCE_RADIUS) / DOT_SPACING));
    const endCol = Math.min(Math.ceil(width / DOT_SPACING), Math.ceil((mx + INFLUENCE_RADIUS) / DOT_SPACING));
    const startRow = Math.max(0, Math.floor((my - INFLUENCE_RADIUS) / DOT_SPACING));
    const endRow = Math.min(Math.ceil(height / DOT_SPACING), Math.ceil((my + INFLUENCE_RADIUS) / DOT_SPACING));

    // Draw base dots
    const fillOff = "#1a1a1a";
    const fillOn = "#3d3d3d";

    ctx.fillStyle = fillOff;
    for (let x = DOT_SPACING / 2; x < width; x += DOT_SPACING) {
      for (let y = DOT_SPACING / 2; y < height; y += DOT_SPACING) {
        ctx.beginPath();
        ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw illuminated dots on top
    for (let col = startCol; col <= endCol; col++) {
      for (let row = startRow; row <= endRow; row++) {
        const x = col * DOT_SPACING + DOT_SPACING / 2;
        const y = row * DOT_SPACING + DOT_SPACING / 2;
        const dist = Math.hypot(x - mx, y - my);
        if (dist < INFLUENCE_RADIUS) {
          const t = 1 - dist / INFLUENCE_RADIUS;
          // const opacity = BASE_OPACITY + (MAX_OPACITY - BASE_OPACITY) * t * t;
          const radius = DOT_RADIUS + 1.2 * t;
          ctx.fillStyle = fillOn;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const renderLoop = () => {
      draw();
      rafRef.current = requestAnimationFrame(renderLoop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default DotBackground;
