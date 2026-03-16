import type { CursorConfig } from "../types";

export const textCursor: CursorConfig = {
  getDotStyle: () => ({
    width: 2,
    height: 24,
    marginLeft: -1,
    marginTop: -12,
    borderRadius: "1px",
    backgroundColor: "hsl(var(--cursor-primary))",
    animation: "pulse-ibeam 1s ease-in-out infinite",
  }),
  getCircleStyle: () => ({
    width: 4,
    height: 32,
    marginLeft: -2,
    marginTop: -16,
    borderRadius: "2px",
    border: "1px solid hsl(var(--cursor-primary) / 0.3)",
    backgroundColor: "hsl(var(--cursor-primary) / 0.05)",
    animation: "pulse-ibeam 1s ease-in-out infinite",
  }),
};
