
import React from "react";

interface Props {
  className: any;
}

export const StatusActiveLabelEmployerHub = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`status-active-label-employer-hub ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#E9EFFF" height="48" rx="8" width="48" />
      <path
        className="path"
        d="M21 29H27M21 26H27M30.9996 21H26.5996C26.0396 21 25.7598 21 25.5459 20.891C25.3577 20.7951 25.2049 20.6422 25.109 20.454C25 20.2401 25 19.9601 25 19.4V15M31 29.8V21.654C31 21.1905 31.0002 20.9587 30.9502 20.7393C30.9059 20.5447 30.8328 20.3579 30.7332 20.185C30.6208 19.99 30.4632 19.82 30.1483 19.4799L26.9502 16.0259C26.6002 15.6479 26.425 15.4589 26.2168 15.3234C26.0322 15.2034 25.8286 15.1146 25.6151 15.0608C25.3743 15 25.1172 15 24.6021 15H20.2002C19.0801 15 18.5196 15 18.0918 15.218C17.7155 15.4097 17.4097 15.7157 17.218 16.092C17 16.5199 17 17.0799 17 18.2V29.8C17 30.9201 17 31.4801 17.218 31.908C17.4097 32.2843 17.7155 32.5902 18.0918 32.782C18.5196 33 19.0801 33 20.2002 33H27.8002C28.9203 33 29.48 33 29.9078 32.782C30.2841 32.5902 30.5905 32.2843 30.7822 31.908C31.0002 31.4801 31 30.9201 31 29.8Z"
        stroke="#1D4ED8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
};
