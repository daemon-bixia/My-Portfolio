// **** Component **** //

const ArrowDown = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={115}
    height={42}
    fill="none"
    {...props}
  >
    <defs>
      <marker
        id="a"
        markerHeight={1}
        markerWidth={1}
        orient="auto-start-reverse"
        preserveAspectRatio="xMidYMid"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
        viewBox="0 0 1 1"
      >
        <path
          d="M3-3 0 0l3 3"
          style={{
            fill: "none",
            stroke: "context-stroke",
            strokeWidth: 1,
            strokeLinecap: "round",
            strokeDasharray: 8.485280990600586,
            strokeDashoffset: 8.485280990600586,
          }}
          transform="rotate(180 .125 0)"
        />
      </marker>
    </defs>
    <path
      d="M1.542.612s.457 21.609 19.977 7.529c15.934-11.493 24.537-1.407 29.544 3.178C64.14 23.29 58.945 40.576 47.16 40.955c-30.932.996 20.127-64.896 56.405-29.403 7.718 7.552 7.255 22.89 7.255 22.89"
      style={{
        fontVariationSettings: "&quot",
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#a)",
        strokeDasharray: 222.98648071289062,
        strokeDashoffset: 222.98648071289062
      }}
    />
  </svg>
);


// **** Default export **** //

export default ArrowDown;
