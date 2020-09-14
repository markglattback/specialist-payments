import { HTMLAttributes } from "react";

export default function Gateways({ style }: HTMLAttributes<SVGAElement>) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <defs></defs>
      <rect style={{ fill: "var(--white)" }} width="60" height="60" />
      <polyline
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
          stroke: "#202026",
        }}
        points="29 30 19.26 30 10 30"
      />
      <polyline
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
          stroke: "#202026",
        }}
        points="29 24 17 24 17 18"
      />
      <circle
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
          stroke: "#202026",
        }}
        cx="17"
        cy="14"
        r="3"
      />
      <circle
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
          stroke: "#202026",
        }}
        cx="6"
        cy="30"
        r="3"
      />
      <polyline
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
          stroke: "#202026",
        }}
        points="29 36 17 36 17 42"
      />
      <circle
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
          stroke: "#202026",
        }}
        cx="17"
        cy="46"
        r="3"
      />
      <path
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
          stroke: "#202026",
        }}
        d="M27,20V16.13A2.13,2.13,0,0,1,29.13,14H30a2,2,0,0,1,2,2V44a2,2,0,0,1-2,2H29a2,2,0,0,1-2-2V40.17"
      />
      <line
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
          stroke: "#202026",
          strokeDasharray: "3 3",
        }}
        x1="35"
        y1="30"
        x2="58"
        y2="30"
      />
      <circle style={{ fill: "#202026" }} cx="52" cy="30" r="5" />
      <polyline
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "2px",
          stroke: "var(--white)",
        }}
        points="49 30 51 32 55 28"
      />
    </svg>
  );
}
