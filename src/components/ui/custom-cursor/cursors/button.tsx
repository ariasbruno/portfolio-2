import type { CursorConfig } from "../types";

export const getButtonDotStyle = (isPressed: boolean, isSquare: boolean = false) => ({
  width: 6,
  height: 6,
  marginLeft: -3,
  marginTop: -3,
  backgroundColor: "hsl(var(--cursor-primary))",
  borderRadius: isSquare ? "1px" : "50%",
  transform: isPressed ? "scale(0.5)" : "scale(1)",
});

export const getButtonCircleStyle = (isPressed: boolean, rect: DOMRect | null, borderRadius: string) => {
  const w = rect ? rect.width + 16 : 52;
  const h = rect ? rect.height + 16 : 52;
  return {
    width: w,
    height: h,
    marginLeft: -w / 2,
    marginTop: -h / 2,
    borderRadius,
    border: "2px solid hsl(var(--cursor-primary) / 0.7)",
    backgroundColor: "hsl(var(--cursor-primary) / 0.08)",
    transform: isPressed ? "scale(0.92)" : "scale(1)",
  };
};

export const getButtonRoundCircleStyle = (isPressed: boolean, rect: DOMRect | null) => {
  const w = rect ? rect.width + 12 : 52;
  const h = rect ? rect.height + 12 : 52;
  return {
    width: w,
    height: h,
    marginLeft: -w / 2,
    marginTop: -h / 2,
    borderRadius: "9999px",
    border: "2px solid hsl(var(--cursor-primary) / 0.7)",
    backgroundColor: "hsl(var(--cursor-primary) / 0.08)",
    transform: isPressed ? "scale(0.92)" : "scale(1)",
  };
};

export const buttonCursor: CursorConfig = {
  getDotStyle: ({ isPressed }) => getButtonDotStyle(isPressed),
  getCircleStyle: ({ isPressed, rect }) => getButtonCircleStyle(isPressed, rect, "12px"),
};

export const buttonRoundCursor: CursorConfig = {
  getDotStyle: ({ isPressed }) => getButtonDotStyle(isPressed),
  getCircleStyle: ({ isPressed, rect }) => getButtonRoundCircleStyle(isPressed, rect),
};

export const buttonSquareCursor: CursorConfig = {
  getDotStyle: ({ isPressed }) => getButtonDotStyle(isPressed, true),
  getCircleStyle: ({ isPressed, rect }) => getButtonCircleStyle(isPressed, rect, "4px"),
};

const externalDotStyle = {
  width: 16,
  height: 16,
  marginLeft: -8,
  marginTop: -8,
  borderRadius: 0,
  backgroundColor: "transparent",
};

export const buttonExternalCursor: CursorConfig = {
  getDotStyle: () => externalDotStyle,
  getCircleStyle: ({ isPressed, rect }) => getButtonCircleStyle(isPressed, rect, "12px"),
  renderDotContent: ({ isPressed }) => (
    <svg className="custom-cursor-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: isPressed ? "scale(0.8)" : "scale(1)", transition: "transform 0.15s ease-out, opacity 0.25s ease-out" }}>
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="hsl(var(--cursor-primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const buttonRoundExternalCursor: CursorConfig = {
  getDotStyle: () => externalDotStyle,
  getCircleStyle: ({ isPressed, rect }) => getButtonRoundCircleStyle(isPressed, rect),
  renderDotContent: ({ isPressed }) => (
    <svg className="custom-cursor-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: isPressed ? "scale(0.8)" : "scale(1)", transition: "transform 0.15s ease-out, opacity 0.25s ease-out" }}>
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="hsl(var(--cursor-primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
