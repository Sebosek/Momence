import {FunctionComponent, HTMLAttributes} from "react";
import clsx from "clsx";

const Exchange: FunctionComponent<HTMLAttributes<SVGElement>> = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={clsx("icon icon-tabler icon-tabler-arrows-exchange", className)}
    width="40"
    height="40" 
    viewBox="0 0 24 24" 
    strokeWidth="1.25" 
    stroke="currentColor" 
    fill="none" 
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M7 10h14l-4 -4"></path>
    <path d="M17 14h-14l4 4"></path>
  </svg>
);

export default Exchange;