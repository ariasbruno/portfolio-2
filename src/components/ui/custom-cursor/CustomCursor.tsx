import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";
import type { CursorType } from "./types";
import { cursorRegistry } from "./registry";
import { baseDotStyle, baseCircleStyle } from "./base-styles";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const pointerTarget = useRef<HTMLElement | null>(null);
  const hoverTarget = useRef<HTMLElement | null>(null);
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const cursorTypeRef = useRef<CursorType>("default");
  const [isPressed, setIsPressed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const targetRect = useRef<DOMRect | null>(null);
  const prevCursorType = useRef<CursorType>("default");

  const updateCursorType = (type: CursorType) => {
    if (cursorTypeRef.current === type) return;
    prevCursorType.current = cursorTypeRef.current;
    setCursorType(type);
    cursorTypeRef.current = type;
  };

  useEffect(() => {
    let lastTouchTime = 0;

    // Check if user is using a touchscreen
    const onTouchStart = () => {
      lastTouchTime = Date.now();
      setIsTouchDevice(true);
      setIsVisible(false); // Hide the custom cursor
    };

    // Check if user is using a mouse (even on touch devices)
    const onMouseMove = () => {
      // Ignore mousemove events right after a touch (emulated mouse events)
      if (Date.now() - lastTouchTime < 500) return;

      setIsTouchDevice(false);
      setIsVisible(true); // Show the custom cursor
    };

    // Listen to actual user interactions instead of device capabilities
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const updateFromTarget = (target: HTMLElement | null) => {
      if (!target) {
        updateCursorType("default");
        hoverTarget.current = null;
        targetRect.current = null;
        return;
      }

      const cursorEl = target.closest("[data-cursor-type]") as HTMLElement | null;
      if (cursorEl) {
        const type = cursorEl.getAttribute("data-cursor-type") as CursorType;
        updateCursorType(type);
        if (type === "copy" || type === "download" || type === "slider" || type === "scroll" || type === "prev" || type === "next" || type === "expand" || type === "collapse" || type === "compare") {
          // Don't magnetically snap — let the cursor move freely with normal lerp
          hoverTarget.current = null;
          targetRect.current = null;
        } else {
          // Find the interactive element to magnetically snap to
          const innerTarget = cursorEl.querySelector("[data-cursor-target], button, input, textarea, [role='checkbox'], [role='radio'], [role='slider'], [data-radix-scroll-area-scrollbar] div, span[data-radix-collection-item]") as HTMLElement | null;
          const sizeTarget = innerTarget || cursorEl;
          hoverTarget.current = sizeTarget;
          targetRect.current = sizeTarget.getBoundingClientRect();
        }
      } else {
        const interactive = target.closest("a, button, [role='button'], input, textarea, select, label") as HTMLElement | null;
        if (interactive && !interactive.closest("[data-cursor-disabled]")) {
          updateCursorType("button");
          hoverTarget.current = interactive;
          targetRect.current = interactive.getBoundingClientRect();
        } else {
          updateCursorType("default");
          hoverTarget.current = null;
          targetRect.current = null;
        }
      }
    };

    const recheckCursor = () => {
      // Small delay to allow react state to update DOM first
      setTimeout(() => {
        if (!mouse.current.x || !mouse.current.y) return;
        const target = document.elementFromPoint(mouse.current.x, mouse.current.y) as HTMLElement | null;
        updateFromTarget(target);
      }, 50);
    };

    const onMove = (e: PointerEvent | MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (circlePos.current.x === -100 || Number.isNaN(circlePos.current.x)) {
        circlePos.current = { x: e.clientX, y: e.clientY };
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      pointerTarget.current = e.target as HTMLElement;
    };

    const onDown = () => setIsPressed(true);
    const onUp = () => setIsPressed(false);

    const animate = () => {
      try {
        const lerp = 0.12;

        let targetX = mouse.current.x;
        let targetY = mouse.current.y;
        let circleTargetX = mouse.current.x;
        let circleTargetY = mouse.current.y;

        if (pointerTarget.current) {
          if (!document.body.contains(pointerTarget.current)) {
            pointerTarget.current = null;
            updateFromTarget(null);
          } else {
            updateFromTarget(pointerTarget.current);
          }
        }

        if (hoverTarget.current && targetRect.current) {
          const rect = targetRect.current;
          if (cursorTypeRef.current === "text") {
            // Dot follows the mouse freely (no snap)
            // Circle anchors to the left edge of the input, always before text
            const isTextarea = hoverTarget.current.tagName === "TEXTAREA";
            circleTargetX = rect.left;
            // For textareas, anchor to the top (first line); for inputs, center vertically
            circleTargetY = isTextarea ? rect.top + 16 : rect.top + rect.height / 2;
          } else if (cursorTypeRef.current !== "default") {
            targetX = rect.left + rect.width / 2;
            targetY = rect.top + rect.height / 2;
            circleTargetX = targetX;
            circleTargetY = targetY;
          }
        } else {
          circleTargetX = targetX;
          circleTargetY = targetY;
        }

        // All cursor types use normal lerp for smooth natural delay
        circlePos.current.x += (circleTargetX - circlePos.current.x) * lerp;
        circlePos.current.y += (circleTargetY - circlePos.current.y) * lerp;

        if (Number.isNaN(circlePos.current.x)) circlePos.current.x = mouse.current.x;
        if (Number.isNaN(circlePos.current.y)) circlePos.current.y = mouse.current.y;

        if (circleRef.current) {
          circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0)`;
        }
      } catch (e) {
        console.error("Cursor animation error:", e);
      } finally {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    // If it's a touch device, we don't start the animation loop or add listeners
    if (isTouchDevice) return;

    let hasMoved = false;

    const startAnimation = () => {
      if (!hasMoved) {
        hasMoved = true;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const onInitialMove = (e: PointerEvent | MouseEvent) => {
      onMove(e);
      startAnimation();
      window.removeEventListener("pointermove", onInitialMove);
      window.removeEventListener("mousemove", onInitialMove);
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("mousemove", onMove, { passive: true });
    };

    window.addEventListener("pointermove", onInitialMove, { passive: true });
    window.addEventListener("mousemove", onInitialMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("click", recheckCursor, { passive: true });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener("pointermove", onInitialMove);
      window.removeEventListener("mousemove", onInitialMove);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("click", recheckCursor);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isTouchDevice]);

  const rect = targetRect.current;
  const config = cursorRegistry[cursorType] || {};
  const state = { type: cursorType, isPressed, rect };

  const dotStyle = {
    ...baseDotStyle,
    ...(config.getDotStyle ? config.getDotStyle(state) : {}),
  } as React.CSSProperties;

  const circleStyle = {
    ...baseCircleStyle,
    ...(config.getCircleStyle ? config.getCircleStyle(state) : {}),
  } as React.CSSProperties;

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-9999 pointer-events-none flex items-center justify-center"
        style={dotStyle}
      >
        {config.renderDotContent?.(state)}
      </div>
      {/* Layer to capture hover animation state externally to the cursor itself via body class */}
      {/* Circle */}
      <div
        id="custom-cursor"
        ref={circleRef}
        className="fixed top-0 left-0 z-9998 pointer-events-none flex items-center justify-center"
        style={circleStyle}
      >
        {config.renderCircleContent?.(state)}
      </div>
    </>
  );
};

export default CustomCursor;
