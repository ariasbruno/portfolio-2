import type { CursorConfig } from "../types";

export const scrollCursor: CursorConfig = {
  getDotStyle: () => ({
    width: 6,
    height: 14,
    marginLeft: -3,
    marginTop: -7,
    borderRadius: "9999px",
    backgroundColor: "hsl(var(--cursor-foreground))",
    opacity: 0.6,
  }),
  getCircleStyle: () => ({
    width: 28,
    height: 44,
    marginLeft: -14,
    marginTop: -22,
    borderRadius: "9999px",
    border: "1.5px solid hsl(var(--cursor-foreground) / 0.5)",
    backgroundColor: "transparent",
    opacity: 0.8,
  }),
};

export const compareCursor: CursorConfig = {
  getDotStyle: () => ({
    width: 44,
    height: 16,
    marginLeft: -22,
    marginTop: -8,
    borderRadius: 0,
    backgroundColor: "transparent",
    transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), margin 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  }),
  getCircleStyle: () => ({
    // Horizontal pill that wraps the two arrows — follows mouse with normal lerp
    width: 44,
    height: 28,
    marginLeft: -22,
    marginTop: -14,
    borderRadius: "9999px",
    border: "1.5px solid hsl(var(--cursor-foreground) / 0.7)",
    backgroundColor: "transparent",
    transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1), margin 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.4s cubic-bezier(0.4, 0, 0.2, 1), border 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  }),
  renderDotContent: () => (
    <div className="relative flex items-center justify-center" style={{ width: 44, height: 16 }}>
      <div className="absolute" style={{ width: 9, height: 9, left: "50%", top: "50%", marginLeft: -4.5, marginTop: -4.5, backgroundColor: "hsl(var(--cursor-foreground))", animation: "dot-to-chevron-left 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards" }} />
      <div className="absolute" style={{ width: 9, height: 9, left: "50%", top: "50%", marginLeft: -4.5, marginTop: -4.5, backgroundColor: "hsl(var(--cursor-foreground))", animation: "dot-to-chevron-right 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards" }} />
    </div>
  ),
};
