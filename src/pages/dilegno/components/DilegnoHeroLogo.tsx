import type * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  xPercent?: number; // 0 a 100 (Posición Horizontal)
  yPercent?: number; // 0 a 100 (Posición Vertical)
  color?: string;
}

const DilegnoHeroLogo = ({
  xPercent = 75,
  yPercent = 80,
  color = "#fdb913",
  style,
  ...props
}: Props) => {
  return (
    <svg
      className="absolute top-0 left-0 pointer-events-none z-10"
      height="100%"
      style={style}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Líneas Guía */}
      <g stroke={color} strokeWidth={2}>
        {/* Horizontal */}
        <line
          vectorEffect="non-scaling-stroke"
          x1="0%"
          x2="100%"
          y1={`${yPercent}%`}
          y2={`${yPercent}%`}
        />
        {/* Vertical */}
        <line
          vectorEffect="non-scaling-stroke"
          x1={`${xPercent}%`}
          x2={`${xPercent}%`}
          y1="0%"
          y2="100%"
        />
      </g>

      {/* SVG Logo */}
      <svg
        height="100"
        style={{ overflow: "visible" }}
        viewBox="0 0 100 100"
        width="100"
        x={`${xPercent}%`}
        y={`${yPercent}%`}
      >
        <g transform="translate(-50, -50)">
          <circle
            cx="50"
            cy="50"
            fill="none"
            r="20"
            stroke={color}
            strokeWidth="2"
          />
        </g>
      </svg>
    </svg>
  );
};

export default DilegnoHeroLogo;
