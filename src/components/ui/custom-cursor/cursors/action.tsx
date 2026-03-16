import type { CursorConfig } from "../types";

export const linkCursor: CursorConfig = {
  getDotStyle: ({ isPressed }) => ({
    opacity: 1,
    transform: isPressed ? "scale(0.8)" : "scale(1)",
  }),
  getCircleStyle: ({ rect }) => {
    const w = rect ? rect.width + 4 : 60;
    const bottomOffset = rect ? rect.height / 2 + 4 : 12;
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
  },
};

export const downloadCursor: CursorConfig = {
  getDotStyle: ({ isPressed }) => ({
    width: 14,
    height: 14,
    marginLeft: -7,
    marginTop: -7,
    borderRadius: 0,
    backgroundColor: "hsl(var(--cursor-primary))",
    clipPath: "polygon(35% 0%, 65% 0%, 65% 55%, 100% 55%, 50% 100%, 0% 55%, 35% 55%)",
    transform: isPressed ? "scale(0.8) translateY(2px)" : "scale(1)",
  }),
  getCircleStyle: ({ isPressed }) => ({
    width: 24,
    height: 3,
    marginLeft: -12,
    marginTop: 10,
    borderRadius: "1.5px",
    border: "none",
    backgroundColor: "hsl(var(--cursor-primary))",
    transform: isPressed ? "scaleX(0.8) translateY(2px)" : "scaleX(1)",
  }),
};

export const copyCursor: CursorConfig = {
  getDotStyle: ({ isPressed }) => ({
    width: 14,
    height: 14,
    marginLeft: -7,
    marginTop: -7,
    borderRadius: "3px",
    backgroundColor: "hsl(var(--cursor-primary))",
    opacity: 0.85,
    transform: isPressed ? "scale(0.85)" : "scale(1)",
  }),
  getCircleStyle: ({ isPressed }) => ({
    width: 14,
    height: 14,
    marginLeft: -14,
    marginTop: -14,
    borderRadius: "3px",
    border: "2px solid hsl(var(--cursor-primary) / 0.7)",
    backgroundColor: "hsl(var(--cursor-primary) / 0.1)",
    transform: isPressed ? "scale(0.85)" : "scale(1)",
  }),
};

export const sendCursor: CursorConfig = {
  getDotStyle: () => ({
    width: 18,
    height: 18,
    marginLeft: -18,
    marginTop: -2,
    borderRadius: 0,
    transform: "rotate(45deg)",
    backgroundColor: "transparent",
  }),
  getCircleStyle: ({ rect }) => {
    const w = rect ? rect.width + 4 : 60;
    const bottomOffset = rect ? rect.height / 2 + 4 : 12;
    return {
      width: w,
      height: 2,
      marginLeft: -w / 2,
      marginTop: bottomOffset,
      borderRadius: "1px",
      border: "none",
      backgroundColor: "hsl(var(--cursor-primary) / 0.7)",
      transition: "width 0.3s ease-out, height 0.3s ease-out, margin 0.3s ease-out, border-radius 0.3s ease-out, border 0.3s ease-out, background-color 0.3s ease-out, opacity 0.3s ease-out",
    };
  },
  renderDotContent: ({ isPressed }) => (
    <svg
      className="custom-cursor-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        transform: isPressed ? "scale(0.8) rotate(45deg)" : "",
        transition: "transform 0.15s ease-out, opacity 0.25s ease-out",
      }}
    >
      <path
        d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
        stroke="hsl(var(--cursor-primary))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
