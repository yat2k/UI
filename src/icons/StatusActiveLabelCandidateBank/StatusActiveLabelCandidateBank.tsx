import React from "react";

interface Props {
  className: any;
}

export const StatusActiveLabelCandidateBank = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`status-active-label-candidate-bank ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#E9EFFF" height="48" rx="8" width="48" />
      <path
        className="path"
        d="M29 32C29 30.3431 26.7614 29 24 29C21.2386 29 19 30.3431 19 32M33 28.9999C33 27.7697 31.7659 26.7124 30 26.2495M15 28.9999C15 27.7697 16.2341 26.7124 18 26.2495M30 22.2361C30.6137 21.6868 31 20.8885 31 20C31 18.3431 29.6569 17 28 17C27.2316 17 26.5308 17.2889 26 17.7639M18 22.2361C17.3863 21.6868 17 20.8885 17 20C17 18.3431 18.3431 17 20 17C20.7684 17 21.4692 17.2889 22 17.7639M24 26C22.3431 26 21 24.6569 21 23C21 21.3431 22.3431 20 24 20C25.6569 20 27 21.3431 27 23C27 24.6569 25.6569 26 24 26Z"
        stroke="#1D4ED8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
};
