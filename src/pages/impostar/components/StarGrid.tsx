
import { useEffect, useRef, useCallback } from "react";

const GRID_SPACING = 10; // High density for maximum detail

const StarGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const interpolatedRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const { x: targetX, y: targetY } = mouseRef.current.x === -1000
      ? { x: width * 0.55, y: height * 0.5 } // Rest position
      : mouseRef.current;

    // Interpolation (Delay effect)
    // Lerp factor 0.1 for smooth delay
    const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

    // Use a slightly lower lerp factor for the return to rest to make it feel "settling"
    const lerpFactor = mouseRef.current.x === -1000 ? 0.05 : 0.1;

    interpolatedRef.current.x = lerp(interpolatedRef.current.x, targetX, lerpFactor);
    interpolatedRef.current.y = lerp(interpolatedRef.current.y, targetY, lerpFactor);

    const mx = interpolatedRef.current.x;
    const my = interpolatedRef.current.y;

    ctx.clearRect(0, 0, width, height);

    const cols = Math.ceil(width / GRID_SPACING);
    const rows = Math.ceil(height / GRID_SPACING);

    // Color palette
    const fillOff = "#333333";
    const activeColor = "#0A84FF";

    // Star interaction settings
    const spikes = 5;
    const outerRadius = 180; // Slightly larger to accommodate stroke
    const innerRadius = outerRadius * 0.5;
    const strokeWidth = 40; // The width of the "halftone" band

    // Rotation: slightly to the left
    const rotationOffset = -Math.PI / 8; // Rotate left ~22 degrees

    // Constant for the exact star formula
    const alpha = Math.PI / spikes;
    const sinAlpha = Math.sin(alpha);
    const crossProd = innerRadius * outerRadius * sinAlpha;

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = i * GRID_SPACING;
        const y = j * GRID_SPACING;

        const dx = x - mx;
        const dy = y - my;
        const dist = Math.hypot(dx, dy);

        let size = 1.5; // Slightly smaller default
        let color = fillOff;

        // Optimization: Quick bounding box
        if (dist < outerRadius + strokeWidth + 20) {
          const angle = Math.atan2(dy, dx);
          const normalizedAngle = angle + Math.PI / 2 - rotationOffset;
          let localAngle = normalizedAngle % (Math.PI * 2);
          if (localAngle < 0) localAngle += Math.PI * 2;

          const step = Math.PI * 2 / spikes;
          const angleInSector = localAngle % step;

          let angleFromSpike = angleInSector;
          if (angleFromSpike > step / 2) {
            angleFromSpike = step - angleFromSpike;
          }

          // Calculate theoretical radius of the star boundary at this angle
          const beta = angleFromSpike;
          const denominator = outerRadius * Math.sin(alpha - beta) + innerRadius * Math.sin(beta);
          const starRadiusAtAngle = crossProd / denominator;

          // Calculate distance from this boundary
          const distFromBorder = Math.abs(dist - starRadiusAtAngle);

          if (distFromBorder < strokeWidth) {
            // We are within the stroke!
            // Calculate intensity (0 to 1) based on closeness to the boundary line
            // 1 at boundary, 0 at edge of stroke
            const t = 1 - (distFromBorder / strokeWidth);

            // Halftone size effect
            // Center of stroke (t=1) -> Max size
            // Edge of stroke (t=0) -> Min size (default)

            // Curve the falloff for nicer "halftone" look
            const easeT = t * t;

            size = 1.5 + 4.5 * easeT; // Range from 1.5 to 6
            color = activeColor;
          }
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
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
    window.addEventListener("mousemove", onMove, { passive: true }); // Global tracking as per Rincon
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
      className="absolute inset-0 pointer-events-none z-0 opacity-30"
    />
  );
};

export default StarGrid;
