import {FunctionComponent, HTMLAttributes} from 'react';
import clsx from 'clsx';

const Arrow: FunctionComponent<HTMLAttributes<SVGElement>> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={clsx("icon icon-tabler icon-tabler-x", className)}
    width="40" height="40"
    viewBox="0 0 24 24"
    strokeWidth="1.25"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default Arrow;
