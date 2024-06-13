import { SVGProps } from 'react'

const DeleteItemIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <circle cx={9} cy={9} r={9} fill="#000" />
  </svg>
)
export default DeleteItemIcon
