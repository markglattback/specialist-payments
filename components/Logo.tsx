import { SVGProps } from "react";

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 998 281" {...props}>
      <defs>
        <filter
          id="prefix__a"
          x={1.51}
          y={0.4}
          width={262.77}
          height={280.98}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <filter
          id="prefix__b"
          x={-124.11}
          y={-127.61}
          width={522.11}
          height={536.98}
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
          id="prefix__c"
          x={1.51}
          y={0.4}
          width={262.77}
          height={280.98}
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#prefix__a)">
            <path d="M122.58 109.61a6.77 6.77 0 01-2.13 2.28 5.53 5.53 0 01-2.84.66 9 9 0 01-3.91-1c-1.39-.68-3-1.44-4.82-2.29a45.67 45.67 0 00-6.24-2.28 30.13 30.13 0 00-8.27-1Q87 106 82.7 109.1a9.77 9.77 0 00-4.26 8.22 7.85 7.85 0 002.18 5.68 19.65 19.65 0 005.79 4 56.23 56.23 0 008.16 3.09q4.58 1.38 9.34 3t9.33 3.7a32.55 32.55 0 018.17 5.28 23.28 23.28 0 018 18.41 34.62 34.62 0 01-2.74 13.85 30.48 30.48 0 01-8 11 37.43 37.43 0 01-13 7.2A56.07 56.07 0 0187.78 195a57 57 0 01-10.51-1 63.07 63.07 0 01-9.84-2.69 54.19 54.19 0 01-8.72-4.06 42.15 42.15 0 01-7.06-5.07l5.79-9.54a8.11 8.11 0 012.64-2.64 7.36 7.36 0 013.85-.91 8.12 8.12 0 014.42 1.32c1.38.88 3 1.82 4.81 2.84a43.86 43.86 0 006.45 2.84 28.29 28.29 0 009.39 1.4 24.32 24.32 0 007.66-1.07 16.27 16.27 0 005.28-2.79 10.35 10.35 0 003-4 11.86 11.86 0 001-4.71 8.44 8.44 0 00-2.18-6 19.32 19.32 0 00-5.76-4.06 55.37 55.37 0 00-8.22-3.09c-3.07-.92-6.22-1.91-9.43-3a87.35 87.35 0 01-9.44-3.8 32.05 32.05 0 01-8.22-5.53 24.92 24.92 0 01-5.78-8.22 28.6 28.6 0 01-2.18-11.77 30 30 0 012.53-12.17 28.58 28.58 0 017.46-10.1A37.16 37.16 0 0177 90.28a51.24 51.24 0 0117-2.59 52.23 52.23 0 0119.59 3.55 44.22 44.22 0 0114.71 9.34zM139 227V89h15.28a7.4 7.4 0 014.15 1.12 5.2 5.2 0 012.23 3.44l2 9.64a52.57 52.57 0 0114.43-11.67 39.14 39.14 0 0119.07-4.46 34.08 34.08 0 0115.54 3.55 35 35 0 0112.15 10.29 49.68 49.68 0 017.89 16.63 83.69 83.69 0 012.78 22.67 71.39 71.39 0 01-3.13 21.59 53 53 0 01-9 17.24 41.4 41.4 0 01-14.07 11.41 41 41 0 01-18.47 4.1 37.11 37.11 0 01-14.85-2.68 36.52 36.52 0 01-11-7.46V227zm48.64-119.83a25.55 25.55 0 00-13.34 3.3 38.62 38.62 0 00-10.3 9.29v46.67a23.91 23.91 0 009.28 7.36 28.09 28.09 0 0010.81 2.08 24.3 24.3 0 0010.3-2.14 20 20 0 007.81-6.49 32.17 32.17 0 004.92-11 62.83 62.83 0 001.73-15.67 70.32 70.32 0 00-1.47-15.48 30.09 30.09 0 00-4.22-10.3 16.68 16.68 0 00-6.64-5.78 20.73 20.73 0 00-8.88-1.84z" />
          </g>
        </mask>
        <mask
          id="prefix__d"
          x={-124.11}
          y={-127.61}
          width={522.11}
          height={536.98}
          maskUnits="userSpaceOnUse"
        >
          <path
            d="M144.38 140.88L376.89 6.63a268.78 268.78 0 00-232.51-134.24c-147.29 0-268.49 121.2-268.49 268.49s121.2 268.49 268.49 268.49a268.77 268.77 0 00232.51-134.25z"
            fill="#fff"
            filter="url(#prefix__b)"
          />
        </mask>
      </defs>
      <g data-name="Layer 1">
        <g mask="url(#prefix__c)">
          <path
            d="M264.28 71.67l-19 10.93a118.47 118.47 0 010 116.57l19 10.93a140.49 140.49 0 110-138.43z"
            fill="#72cca7"
          />
        </g>
        <g mask="url(#prefix__d)" fill="#72cca7">
          <path d="M142 44.1a96.78 96.78 0 11-96.78 96.78A96.89 96.89 0 01142 44.1m0-21.86a118.64 118.64 0 10118.63 118.64A118.64 118.64 0 00142 22.24z" />
          <path d="M142 .39a140.49 140.49 0 0199.34 239.83A140.49 140.49 0 1142.66 41.54 139.53 139.53 0 01142 .39m0-21.85a162.34 162.34 0 10162.34 162.34A162.34 162.34 0 00142-21.46z" />
          <path d="M142-43.32A187.34 187.34 0 01329.32 144 187.34 187.34 0 01142 331.32 187.34 187.34 0 01-45.32 144 187.34 187.34 0 01142-43.32m0-21.85C26.48-65.17-67.17 28.48-67.17 144S26.48 353.17 142 353.17 351.17 259.52 351.17 144 257.52-65.17 142-65.17z" />
          <path d="M142-90.15A234 234 0 01376.15 144 234 234 0 01142 378.15 234 234 0 01-92.15 144 234 234 0 01142-90.15m0-21.85C.62-112-114 2.62-114 144S.62 400 142 400s256-114.62 256-256-114.62-256-256-256z" />
        </g>
      </g>
      <text
        transform="translate(479.06 131.46)"
        fontSize={115}
        fill="#fff"
        fontFamily="Lato-Black,Lato"
        fontWeight={800}
        data-name="Layer 2"
      >
        {"Specialist"}
        <tspan x={0} y={100} letterSpacing="-.025em">
          {"P"}
        </tspan>
        <tspan x={70.49} y={100} letterSpacing="-.02em">
          {"a"}
        </tspan>
        <tspan x={130.18} y={100}>
          {"yments"}
        </tspan>
      </text>
    </svg>
  );
}

export default SvgComponent;