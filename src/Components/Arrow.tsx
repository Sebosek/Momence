import {FunctionComponent, HTMLAttributes} from 'react';
import clsx from 'clsx';

const Arrow: FunctionComponent<HTMLAttributes<SVGElement>> = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={clsx("icon icon-tabler icon-tabler-arrow-right", className)}
    width="40" height="40"
    viewBox="0 0 24 24" 
    strokeWidth="1.25" 
    stroke="currentColor" 
    fill="none" 
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <line x1="13" y1="18" x2="19" y2="12"></line>
    <line x1="13" y1="6" x2="19" y2="12"></line>
  </svg>
);

export default Arrow;
