import React from "react";

interface Props {
  className: any;
}

export const StatusActiveLabelTrackStatus = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`status-active-label-track-status ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#E9EFFF" height="48" rx="8" width="48" />
      <path
        className="path"
        d="M22.0002 32H19.2002C18.0801 32 17.5196 32 17.0918 31.782C16.7155 31.5903 16.4097 31.2843 16.218 30.908C16 30.4801 16 29.9201 16 28.8V19.2C16 18.0799 16 17.5199 16.218 17.092C16.4097 16.7157 16.7155 16.4097 17.0918 16.218C17.5196 16 18.0801 16 19.2002 16H28.8002C29.9203 16 30.48 16 30.9078 16.218C31.2841 16.4097 31.5905 16.7157 31.7822 17.092C32.0002 17.5199 32 18.0799 32 19.2V22M31 31L28 28M25.5 29C23.567 29 22 27.433 22 25.5C22 23.567 23.567 22 25.5 22C27.433 22 29 23.567 29 25.5C29 27.433 27.433 29 25.5 29Z"
        stroke="#1D4ED8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
};
