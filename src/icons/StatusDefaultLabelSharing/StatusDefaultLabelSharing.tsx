import React from "react";

interface Props {
  className: any;
}

export const StatusDefaultLabelSharing = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`status-default-label-sharing ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M24 20.1943C22 15.4999 15 15.9999 15 21.9999C15 27.9999 24 32.9999 24 32.9999C24 32.9999 33 27.9999 33 21.9999C33 15.9999 26 15.4999 24 20.1943Z"
        stroke="#444444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
