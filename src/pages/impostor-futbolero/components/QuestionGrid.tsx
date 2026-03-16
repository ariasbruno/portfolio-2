
import { useEffect, useRef, useCallback } from "react";

const GRID_SPACING = 10;

const QuestionGrid = () => {
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
      ? { x: width * 0.52, y: height * .35 } // Rest position
      : mouseRef.current;

    const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;
    const lerpFactor = mouseRef.current.x === -1000 ? 0.05 : 0.1;

    interpolatedRef.current.x = lerp(interpolatedRef.current.x, targetX, lerpFactor);
    interpolatedRef.current.y = lerp(interpolatedRef.current.y, targetY, lerpFactor);

    const mx = interpolatedRef.current.x;
    const my = interpolatedRef.current.y;

    ctx.clearRect(0, 0, width, height);

    const cols = Math.ceil(width / GRID_SPACING);
    const rows = Math.ceil(height / GRID_SPACING);

    // Distance to segment function
    const sdSegment = (x: number, y: number, ax: number, ay: number, bx: number, by: number) => {
      const pax = x - ax, pay = y - ay;
      const bax = bx - ax, bay = by - ay;
      const h = Math.min(1, Math.max(0, (pax * bax + pay * bay) / (bax * bax + bay * bay)));
      return Math.hypot(pax - bax * h, pay - bay * h);
    };

    // Distance to arc function
    const sdArc = (x: number, y: number, cx: number, cy: number, r: number, startAngle: number, endAngle: number) => {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);

      // Normalize angle to [0, 2PI]
      let a = angle;
      while (a < 0) a += Math.PI * 2;

      let s = startAngle;
      while (s < 0) s += Math.PI * 2;
      let e = endAngle;
      while (e < 0) e += Math.PI * 2;

      // Handle the case where the arc crosses the 0/2PI line
      const isInRange = s <= e
        ? (a >= s && a <= e)
        : (a >= s || a <= e);

      if (isInRange) {
        return Math.abs(dist - r);
      }

      // Distance to endpoints
      const d1 = Math.hypot(x - (cx + r * Math.cos(startAngle)), y - (cy + r * Math.sin(startAngle)));
      const d2 = Math.hypot(x - (cx + r * Math.cos(endAngle)), y - (cy + r * Math.sin(endAngle)));
      return Math.min(d1, d2);
    };

    // Color palette
    const fillOff = "#333333";
    const activeColor = "#13ae4c";

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = i * GRID_SPACING;
        const y = j * GRID_SPACING;

        const dx = x - mx;
        const dy = y - my;
        const distToMouse = Math.hypot(dx, dy);

        let size = 1.2;
        let color = fillOff;

        const influence = 250;
        const strokeWidth = 40; // Total width of the "thicker" area

        if (distToMouse < influence) {
          // Normalized coordinates relative to influence area
          const rx = dx;
          const ry = dy;

          // Define Question Mark Path (using pixel offsets within influence)
          // Scale shape elements by influence
          const S = influence * 0.5;

          // 1. Top Hook (Arc)
          // Center at (0, -S*0.4), Radius S*0.55
          // From roughly 120 degrees (bottom-left start) to 450 degrees (ends bottom-right-ish)
          // Wait, simple top hook: from PI to 0.25PI
          const dArc1 = sdArc(rx, ry, 0, -S * 0.5, S * 0.55, -Math.PI * .9, Math.PI * .15);

          // 2. Connector (Segment from end of arc towards center)
          const endX = S * 0.55 * Math.cos(Math.PI * 0.15);
          const endY = -S * 0.5 + S * 0.55 * Math.sin(Math.PI * 0.15);
          const dSeg1 = sdSegment(rx, ry, endX, endY, 0, 0);

          // 3. Vertical Bar
          const dSeg2 = sdSegment(rx, ry, 0, 0, 0, S * 0.6);

          // 4. Dot
          const dDot = Math.hypot(rx, ry - S * 1.1) - 5;

          const distToShape = Math.min(dArc1, dSeg1, dSeg2, dDot);

          if (distToShape < strokeWidth) {
            // Mouse proximity factor: stronger effect when mouse is closer to the shape itself
            // Wait, StarGrid uses '1 - (distFromBorder / strokeWidth)'
            // And it also scales with mouse proximity? 
            // In StarGrid: size = 1.5 + 4.5 * easeT; where easeT is based on distFromBorder.
            // But it ONLY calculates this for points where dist < outerRadius (near mouse).

            const t = 1 - (distToShape / strokeWidth);
            const mouseFactor = 1 - (distToMouse / influence);

            size = 1.2 + (4.8 * t * t) * mouseFactor;
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
      className="absolute inset-0 pointer-events-none z-0 opacity-30"
    />
  );
};

export default QuestionGrid;
