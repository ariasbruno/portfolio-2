
import { useEffect, useRef, useCallback } from "react";

const DOT_SPACING = 28;
const DOT_RADIUS = 1.5;
const INFLUENCE_RADIUS = 150;

const DotGrid = () => {
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
    // Rincon Casero Palette Adaptation
    const fillOff = "#333333"; // Slightly lighter than bg
    const fillOn = "#e6c786";  // Cream/Gold brand color

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
      // Logic for relative mouse position to the canvas/top-left of viewport
      const rect = canvas.getBoundingClientRect();
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
    window.addEventListener("mousemove", onMove, { passive: true }); // Global mousemove to track even if not hovering directly? Or stick to window/document
    // Torneitos implementation used window.addEventListener("mousemove", onMove)
    // but calculated relative to parent.getBoundingClientRect(). 
    // Let's stick to the original logic which seemed to work for them.

    // Actually, in the original code: 
    // const onMove = (e: MouseEvent) => { const rect = parent.getBoundingClientRect(); ... }
    // It captures mouse relative to the parent section.

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
      className="absolute inset-0 pointer-events-none z-0 opacity-40" // added opacity for subtlety
      aria-hidden="true"
    />
  );
};

export default DotGrid;
