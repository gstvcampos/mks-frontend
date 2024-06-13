import { SVGProps } from 'react'

const CloseCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={47}
    fill="none"
    {...props}
  >
    <circle cx={22.961} cy={23.431} r={22.961} fill="#000" />
    <path
      fill="#0F52BA"
      d="m34.66 34-9.24-11.88 8.712-11.264H30.7l-6.952 9.064-6.952-9.064h-3.52l8.712 11.264L12.836 34h3.52l7.392-9.68L31.096 34h3.564Z"
    />
  </svg>
)
export default CloseCartIcon
