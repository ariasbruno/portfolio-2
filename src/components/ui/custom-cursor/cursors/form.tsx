import type { CursorConfig } from "../types";

export const checkboxCursor: CursorConfig = {
  getDotStyle: ({ isPressed }) => ({
    width: 6,
    height: 6,
    marginLeft: -3,
    marginTop: -3,
    borderRadius: "2px",
    backgroundColor: "hsl(var(--cursor-primary))",
    transform: isPressed ? "scale(0.7)" : "scale(1)",
  }),
  getCircleStyle: ({ rect, isPressed }) => {
    const s = rect ? Math.max(rect.width, rect.height) + 12 : 28;
    return {
      width: s,
      height: s,
      marginLeft: -s / 2,
      marginTop: -s / 2,
      borderRadius: "6px",
      border: "2px solid hsl(var(--cursor-primary) / 0.6)",
      backgroundColor: "hsl(var(--cursor-primary) / 0.08)",
      transform: isPressed ? "scale(0.85)" : "scale(1)",
    };
  },
  renderCircleContent: ({ isPressed }) => (
    isPressed ? <span className="text-[10px] text-primary select-none pointer-events-none">✓</span> : null
  ),
};

export const radioCursor: CursorConfig = {
  getDotStyle: () => ({
    width: 6,
    height: 6,
    marginLeft: -3,
    marginTop: -3,
    backgroundColor: "hsl(var(--cursor-primary))",
  }),
  getCircleStyle: ({ rect }) => {
    const s = rect ? Math.max(rect.width, rect.height) + 16 : 32;
    return {
      width: s,
      height: s,
      marginLeft: -s / 2,
      marginTop: -s / 2,
      border: "2px solid hsl(var(--cursor-primary) / 0.5)",
      backgroundColor: "hsl(var(--cursor-primary) / 0.06)",
      animation: "pulse-radio 1.5s ease-in-out infinite",
    };
  },
};

export const sliderCursor: CursorConfig = {
  getDotStyle: () => ({
    width: 44,
    height: 16,
    marginLeft: -22,
    marginTop: -8,
    borderRadius: 0,
    backgroundColor: "transparent",
    transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), margin 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  }),
  getCircleStyle: ({ rect }) => {
    const s = rect ? Math.max(rect.width, rect.height) + 12 : 32;
    return {
      width: s,
      height: s,
      marginLeft: -s / 2,
      marginTop: -s / 2,
      borderRadius: "50%",
      border: "1.5px solid hsl(var(--cursor-primary) / 0.5)",
      backgroundColor: "hsl(var(--cursor-primary) / 0.06)",
    };
  },
  renderDotContent: () => (
    <div className="relative flex items-center justify-center" style={{ width: 44, height: 16 }}>
      <div className="absolute" style={{ width: 9, height: 9, left: "50%", top: "50%", marginLeft: -4.5, marginTop: -4.5, backgroundColor: "hsl(var(--cursor-primary))", animation: "dot-to-chevron-left 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards" }} />
      <div className="absolute" style={{ width: 9, height: 9, left: "50%", top: "50%", marginLeft: -4.5, marginTop: -4.5, backgroundColor: "hsl(var(--cursor-primary))", animation: "dot-to-chevron-right 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards" }} />
    </div>
  ),
};
