import { HTMLAttributes } from "react";

export default function Links({ style }: HTMLAttributes<SVGAElement>) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      style={style}
    >
      <defs>
        <style></style>
        <filter
          id="luminosity-invert-noclip"
          x="18.87"
          y="9.02"
          width="32.11"
          height="32.11"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
            result="invert"
          />
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="invert" in2="bg" />
        </filter>
        <mask
          id="mask"
          x="18.87"
          y="9.02"
          width="32.11"
          height="32.11"
          maskUnits="userSpaceOnUse"
        >
          <line
            style={{
              fill: "none",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              stroke: "#fff",
              strokeWidth: "6px",
              filter: "url(#luminosity-invert-noclip)",
            }}
            x1="21.87"
            y1="38.13"
            x2="38.13"
            y2="21.87"
          />
        </mask>
        <filter
          id="luminosity-invert-noclip-2"
          x="10.02"
          y="18.87"
          width="31.11"
          height="31.11"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
            result="invert"
          />
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="invert" in2="bg" />
        </filter>
        <mask
          id="mask-2"
          x="10.02"
          y="18.87"
          width="31.11"
          height="31.11"
          maskUnits="userSpaceOnUse"
        >
          <line
            style={{
              fill: "none",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              stroke: "#fff",
              strokeWidth: "6px",
              filter: "url(#luminosity-invert-noclip-2)",
            }}
            x1="21.87"
            y1="38.13"
            x2="38.13"
            y2="21.87"
          />
        </mask>
      </defs>
      <rect style={{ fill: "var(--white)" }} width="60" height="60" />
      <g style={{ mask: "url(#mask)" }}>
        <path
          style={{ fill: "#202026" }}
          d="M44.74,11a3.4,3.4,0,0,1,2.42,1l.82.82a3.4,3.4,0,0,1,0,4.83L38.67,27a3.42,3.42,0,0,1-4.83,0L33,26.16a3.4,3.4,0,0,1,0-4.83L42.33,12a3.4,3.4,0,0,1,2.41-1m0-2a5.42,5.42,0,0,0-3.83,1.58L31.6,19.91a5.44,5.44,0,0,0,0,7.66l.83.83a5.43,5.43,0,0,0,7.66,0l9.31-9.31a5.44,5.44,0,0,0,0-7.66l-.83-.83A5.41,5.41,0,0,0,44.74,9Z"
        />
      </g>
      <g style={{ mask: "url(#mask-2)" }}>
        <path d="M24.74,31a3.4,3.4,0,0,1,2.42,1l.82.82a3.4,3.4,0,0,1,0,4.83L18.67,47a3.42,3.42,0,0,1-4.83,0L13,46.16a3.4,3.4,0,0,1,0-4.83L22.33,32a3.4,3.4,0,0,1,2.41-1m0-2a5.42,5.42,0,0,0-3.83,1.58L11.6,39.91a5.44,5.44,0,0,0,0,7.66l.83.83a5.43,5.43,0,0,0,7.66,0l9.31-9.31a5.44,5.44,0,0,0,0-7.66l-.83-.83A5.41,5.41,0,0,0,24.74,29Z" />
      </g>
      <line
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          stroke: "#202026",
          strokeWidth: "3px",
        }}
        x1="21.87"
        y1="38.13"
        x2="38.13"
        y2="21.87"
      />
    </svg>
  );
}
