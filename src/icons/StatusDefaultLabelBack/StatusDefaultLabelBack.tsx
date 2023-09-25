import React from "react";

interface Props {
  className: any;
}

export const StatusDefaultLabelBack = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`status-default-label-back ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M26 28L22 24L26 20" stroke="#0B0B0B" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
