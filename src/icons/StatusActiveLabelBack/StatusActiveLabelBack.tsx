import React from "react";

interface Props {
  className: any;
}

export const StatusActiveLabelBack = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`status-active-label-back ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#E9EFFF" height="48" rx="8" width="48" />
      <path
        className="path"
        d="M26 28L22 24L26 20"
        stroke="#1D4ED8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
};
