import { useEffect, useRef, useCallback } from "react";

const GRID_SPACING = 20;

// Config
const MAX_RIPPLES = 20;
const RIPPLE_SPEED = 150; // pixels per second
const MAX_RADIUS = 1000;

type Ripple = {
  x: number;
  y: number;
  spawnTime: number;
};

export const RadarGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Track active ripples
  const ripplesRef = useRef<Ripple[]>([]);
  const lastSpawnPosRef = useRef({ x: -1000, y: -1000, time: 0 });
  const rafRef = useRef<number>(0);

  const spawnRipple = (x: number, y: number) => {
    ripplesRef.current.push({
      x,
      y,
      spawnTime: performance.now()
    });
    // Keep only the last N ripples
    if (ripplesRef.current.length > MAX_RIPPLES) {
      ripplesRef.current.shift();
    }
  };

  const draw = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;

    // Default rest behavior if no mouse activity and no ripples
    if (mouseRef.current.x === -1000 && ripplesRef.current.length === 0) {
      // Periodically spawn a ripple at the rest position
      const timeSinceLastSpawn = timestamp - (ripplesRef.current[ripplesRef.current.length - 1]?.spawnTime || 0);
      if (timeSinceLastSpawn > 3000) { // every 3 seconds
        spawnRipple(width * 0.75, height * 0.5);
      }
    }

    ctx.clearRect(0, 0, width, height);

    const cols = Math.ceil(width / GRID_SPACING);
    const rows = Math.ceil(height / GRID_SPACING);

    // Color palette
    const fillOff = "rgba(255, 255, 255, 0.05)";

    // Clean up old ripples
    ripplesRef.current = ripplesRef.current.filter(r => {
      const radius = ((timestamp - r.spawnTime) / 1000) * RIPPLE_SPEED;
      return radius < MAX_RADIUS + 100; // Give a little buffer before culling
    });

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = i * GRID_SPACING;
        const y = j * GRID_SPACING;

        let size = 1.5;
        let finalAlpha = 0;

        // Calculate influence from all active ripples
        for (const ripple of ripplesRef.current) {
          const dx = x - ripple.x;
          const dy = y - ripple.y;
          const dist = Math.hypot(dx, dy);

          const currentRadius = ((timestamp - ripple.spawnTime) / 1000) * RIPPLE_SPEED;

          // Distance from the crest of this specific ripple
          const distToCrest = Math.abs(dist - currentRadius);
          const maxThickness = 40; // Wave thickness

          if (distToCrest < maxThickness) {
            // Intensity based on closeness to crest
            const t = 1 - (distToCrest / maxThickness);
            const easeT = t * t * (3 - 2 * t); // Smoothstep

            // Fade out the ripple as it grows larger
            const lifetimeFade = Math.max(0, 1 - (currentRadius / MAX_RADIUS));

            // Additive size and alpha
            size = Math.max(size, 1.5 + 2 * easeT);
            finalAlpha = Math.max(finalAlpha, easeT * lifetimeFade * 0.8);
          }
        }

        let color = fillOff;
        if (finalAlpha > 0.02) {
          color = `rgba(239, 68, 68, ${finalAlpha})`;
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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      mouseRef.current = { x: currentX, y: currentY };

      const timeNow = performance.now();
      const timeSinceLast = timeNow - lastSpawnPosRef.current.time;

      // Spawn a new ripple strictly based on a 1-second cooldown
      if (timeSinceLast > 1000) {
        spawnRipple(currentX, currentY);
        lastSpawnPosRef.current = { x: currentX, y: currentY, time: timeNow };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      lastSpawnPosRef.current = { x: -1000, y: -1000, time: 0 };
    };

    const renderLoop = (timestamp: number) => {
      draw(timestamp);
      rafRef.current = requestAnimationFrame(renderLoop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Start animation loop
    rafRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
    />
  );
};
