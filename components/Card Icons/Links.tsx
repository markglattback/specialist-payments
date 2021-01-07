import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      {...props}
    >
      <path fill="#43b185" d="M0 0h60v60H0z" />
      <path
        d="M49.4 11.43l-.83-.83a5.43 5.43 0 00-7.66 0l-9.31 9.31a5.46 5.46 0 00-1.3 5.55l1.7-1.72a3.39 3.39 0 011-2.41L42.33 12a3.42 3.42 0 014.83 0l.82.82a3.4 3.4 0 010 4.83L38.67 27a3.4 3.4 0 01-2.41 1l-1.72 1.7a5.34 5.34 0 001.72.28 5.42 5.42 0 003.83-1.58l9.31-9.31a5.44 5.44 0 000-7.66zM30.7 33.54L29 35.26a3.39 3.39 0 01-1 2.41L18.67 47a3.42 3.42 0 01-4.83 0l-.84-.84a3.4 3.4 0 010-4.83L22.33 32a3.4 3.4 0 012.41-1l1.72-1.72a5.34 5.34 0 00-1.72-.28 5.42 5.42 0 00-3.83 1.58l-9.31 9.33a5.44 5.44 0 000 7.66l.83.83a5.43 5.43 0 007.66 0l9.31-9.31a5.46 5.46 0 001.3-5.55z"
        fill="#202026"
      />
      <path
        fill="none"
        stroke="#202026"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M21.87 38.13l16.26-16.26"
      />
    </svg>
  )
}

export default SvgComponent
