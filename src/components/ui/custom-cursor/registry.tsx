import type { CursorType, CursorConfig } from "./types";
import { textCursor } from "./cursors/text";
import { checkboxCursor, radioCursor, sliderCursor } from "./cursors/form";
import { buttonCursor, buttonRoundCursor, buttonSquareCursor, buttonExternalCursor, buttonRoundExternalCursor } from "./cursors/button";
import { compareCursor, scrollCursor } from "./cursors/media";
import { copyCursor, downloadCursor, linkCursor, sendCursor } from "./cursors/action";
import { redirectCursor, nextCursor, prevCursor, expandCursor, collapseCursor, externalCursor } from "./cursors/navigation";

export const cursorRegistry: Record<CursorType, CursorConfig> = {
  default: {},
  text: textCursor,
  checkbox: checkboxCursor,
  radio: radioCursor,
  slider: sliderCursor,
  button: buttonCursor,
  "button-round": buttonRoundCursor,
  "button-square": buttonSquareCursor,
  "button-external": buttonExternalCursor,
  "button-round-external": buttonRoundExternalCursor,
  scroll: scrollCursor,
  compare: compareCursor,
  link: linkCursor,
  download: downloadCursor,
  copy: copyCursor,
  send: sendCursor,
  redirect: redirectCursor,
  next: nextCursor,
  prev: prevCursor,
  expand: expandCursor,
  collapse: collapseCursor,
  external: externalCursor,
};
