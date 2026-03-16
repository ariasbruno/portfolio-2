import type { CSSProperties } from "react";

export const baseDotStyle: CSSProperties = {
  width: 8,
  height: 8,
  marginLeft: -4,
  marginTop: -4,
  borderRadius: "50%",
  backgroundColor: "hsl(var(--cursor-foreground))",
  mixBlendMode: "difference",
  willChange: "transform, width, height, border-radius",
  transition:
    "width 0.25s ease-out, height 0.25s ease-out, margin 0.25s ease-out, border-radius 0.25s ease-out, background-color 0.25s ease-out, opacity 0.25s ease-out",
};

export const baseCircleStyle: CSSProperties = {
  width: 36,
  height: 36,
  marginLeft: -18,
  marginTop: -18,
  borderRadius: "50%",
  border: "1.5px solid hsl(var(--cursor-foreground) / 0.5)",
  backgroundColor: "transparent",
  mixBlendMode: "difference",
  willChange: "transform, width, height, border-radius",
  transition:
    "width 0.3s ease-out, height 0.3s ease-out, margin 0.3s ease-out, border-radius 0.3s ease-out, border 0.3s ease-out, background-color 0.3s ease-out, opacity 0.3s ease-out, box-shadow 0.3s ease-out",
};
