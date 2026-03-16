import type { CursorConfig } from "../types";

export const getNavDotStyle = () => ({
  width: 16,
  height: 16,
  marginLeft: -8,
  marginTop: -8,
  borderRadius: 0,
  backgroundColor: "transparent",
});

export const getNavCircleStyle = (rect: DOMRect | null) => {
  const w = rect ? rect.width + 4 : 60;
  const bottomOffset = rect ? rect.height / 2 + 1 : 10;
  return {
    width: w,
    height: 2,
    marginLeft: -w / 2,
    marginTop: bottomOffset,
    borderRadius: "1px",
    border: "none",
    backgroundColor: "hsl(var(--cursor-primary) / 0.7)",
    transition: "width 0.3s ease-out, height 0.3s ease-out, margin 0.3s ease-out, border-radius 0.3s ease-out, border 0.3s ease-out, background-color 0.3s ease-out, opacity 0.3s ease-out, box-shadow 0.3s ease-out",
  };
};

export const redirectCursor: CursorConfig = {
  getDotStyle: getNavDotStyle,
  getCircleStyle: ({ rect }) => getNavCircleStyle(rect),
  renderDotContent: ({ isPressed }) => (
    <svg className="custom-cursor-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: isPressed ? "scale(0.8)" : "scale(1)", transition: "transform 0.15s ease-out, opacity 0.25s ease-out" }}>
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="hsl(var(--cursor-primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const nextCursor: CursorConfig = {
  getDotStyle: getNavDotStyle,
  renderDotContent: ({ isPressed }) => (
    <svg className="custom-cursor-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: isPressed ? "scale(0.8)" : "scale(1)", transition: "transform 0.15s ease-out, opacity 0.25s ease-out" }}>
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="hsl(var(--cursor-primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const prevCursor: CursorConfig = {
  getDotStyle: getNavDotStyle,
  renderDotContent: ({ isPressed }) => (
    <svg className="custom-cursor-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: isPressed ? "scale(0.8)" : "scale(1)", transition: "transform 0.15s ease-out, opacity 0.25s ease-out" }}>
      <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="hsl(var(--cursor-primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const expandCursor: CursorConfig = {
  getDotStyle: getNavDotStyle,
  renderDotContent: ({ isPressed }) => (
    <svg className="custom-cursor-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: isPressed ? "scale(0.8)" : "scale(1)", transition: "transform 0.15s ease-out, opacity 0.25s ease-out" }}>
      <path d="M12 5v14m-7-7h14" stroke="hsl(var(--cursor-primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const collapseCursor: CursorConfig = {
  getDotStyle: getNavDotStyle,
  renderDotContent: ({ isPressed }) => (
    <svg className="custom-cursor-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: isPressed ? "scale(0.8)" : "scale(1)", transition: "transform 0.15s ease-out, opacity 0.25s ease-out" }}>
      <path d="M5 12h14" stroke="hsl(var(--cursor-primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const externalCursor: CursorConfig = {
  getDotStyle: getNavDotStyle,
  getCircleStyle: ({ rect }) => getNavCircleStyle(rect),
  renderDotContent: ({ isPressed }) => (
    <svg className="custom-cursor-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: isPressed ? "scale(0.8)" : "scale(1)", transition: "transform 0.15s ease-out, opacity 0.25s ease-out" }}>
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="hsl(var(--cursor-primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
