import * as React from "react"


const Sparkle = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={68}
    fill="none"
    {...props}
  >
    <path
      fill="url(#sparklea)"
      d="M20.504.296C20.5.103 20.5 0 20.5 0l.004.296C20.573 3.378 21.738 29.529 41.5 30c-6.996 1.5-20.484-.498-21 29.944.168-10.02.461-30.443-20.5-29.944 0 0 20.86-.497 20.504-29.704Z"
    />
    <path
      fill="url(#sparkleb)"
      d="M48.34 1.192c-.003-.125-.003-.192-.003-.192l.003.192c.045 2.004.803 19.002 13.66 19.308-4.551.974-13.327-.323-13.662 19.464.108-6.513.3-19.788-13.338-19.464 0 0 13.571-.323 13.34-19.308Z"
    />
    <path
      fill="url(#sparklec)"
      d="M37.882 39.143 37.88 39l.002.143c.033 1.49.594 14.13 10.118 14.357-3.373.725-9.88-.242-10.12 14.5.08-4.833.24-14.742-9.88-14.5 0 0 10.053-.24 9.882-14.357Z"
    />
    <defs>
      <linearGradient
        id="sparklea"
        x1={3}
        x2={33.174}
        y1={13}
        y2={10.647}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8089FE" />
        <stop offset={1} stopColor="#FFADC2" />
      </linearGradient>
      <linearGradient
        id="sparkleb"
        x1={37}
        x2={57.474}
        y1={8}
        y2={7.477}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8089FE" />
        <stop offset={1} stopColor="#FFADC2" />
      </linearGradient>
      <linearGradient
        id="sparklec"
        x1={30.5}
        x2={46.984}
        y1={44.5}
        y2={44.173}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8089FE" />
        <stop offset={1} stopColor="#FFADC2" />
      </linearGradient>
    </defs>
  </svg>
)


export default Sparkle
