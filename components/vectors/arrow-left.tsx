// **** Component **** //

const ArrowLeft = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={35} height={82} fill="none" {...props}>
    <defs>
      <marker
        id="b"
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
      d="M17.906.552s28.252 8.928 8.17 37.88c-5.358 7.724-12.1 10.393-16.645 10.002-3.805-.328-8.987-3.015-9.5-9.407-1.211-15.08 14.48-24.919 29.264 1.337 12.812 22.752-2.97 44.138-26.442 37.453"
      style={{
        fontVariationSettings: "&quot",
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        markerEnd: "url(#b)",
        strokeDasharray: 222.98648071289062,
        strokeDashoffset: 222.98648071289062,
      }}
    />
  </svg>
);


// **** Default export **** //

export default ArrowLeft;
