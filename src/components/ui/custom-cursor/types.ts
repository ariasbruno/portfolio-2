import type { CSSProperties, ReactNode } from "react";

export type CursorType =
  | "default" | "text" | "checkbox" | "radio" | "button"
  | "button-round" | "button-square" | "button-external"
  | "button-round-external" | "slider" | "scroll" | "compare"
  | "link" | "redirect" | "external" | "download" | "copy" | "send"
  | "prev" | "next" | "expand" | "collapse";

export interface CursorState {
  type: CursorType;
  isPressed: boolean;
  rect: DOMRect | null;
}

export interface CursorConfig {
  getDotStyle?: (state: CursorState) => CSSProperties;
  getCircleStyle?: (state: CursorState) => CSSProperties;
  renderDotContent?: (state: CursorState) => ReactNode;
  renderCircleContent?: (state: CursorState) => ReactNode;
}
