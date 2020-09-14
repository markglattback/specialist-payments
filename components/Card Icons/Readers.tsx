import { HTMLAttributes } from "react";

export default function Readers({ style }: HTMLAttributes<SVGAElement>) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <rect style={{ fill: "var(--white)" }} width="60" height="60" />
      <path
        style={{ fill: "#202026" }}
        d="M39.07,7A2.82,2.82,0,0,1,42,9.67V51.33A2.82,2.82,0,0,1,39.07,54H20.93A2.82,2.82,0,0,1,18,51.33V9.67A2.82,2.82,0,0,1,20.93,7H39.07m0-2H20.93A4.81,4.81,0,0,0,16,9.67V51.33A4.81,4.81,0,0,0,20.93,56H39.07A4.81,4.81,0,0,0,44,51.33V9.67A4.81,4.81,0,0,0,39.07,5Z"
      />
      <line
        style={{
          fill: "none",
          stroke: "#202026",
          strokeLinecap: "square",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
        }}
        x1="42"
        y1="12"
        x2="18"
        y2="12"
      />
      <rect
        style={{
          fill: "none",
          stroke: "#202026",
          strokeLinecap: "square",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
        }}
        x="21"
        y="17"
        width="18"
        height="33"
      />
    </svg>
  );
}
