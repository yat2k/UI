import React from "react";

interface Props {
  className: any;
}

export const StatusDefaultLabelDashboard = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`status-default-label-dashboard ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M32 29.0002V23.4522V23.4515C32 22.9176 32 22.6506 31.9351 22.4021C31.8775 22.1817 31.7827 21.9728 31.6548 21.7843C31.5104 21.5717 31.3096 21.3958 30.9074 21.0439L26.1074 16.8439C25.3608 16.1907 24.9875 15.8641 24.5674 15.7398C24.1972 15.6303 23.8028 15.6303 23.4326 15.7398C23.0127 15.864 22.6398 16.1903 21.894 16.8429L21.8928 16.8439L17.0928 21.0439L17.0918 21.0448C16.6903 21.3961 16.4894 21.5719 16.3452 21.7843C16.2173 21.9728 16.1225 22.1817 16.065 22.4021C16 22.6507 16 22.9179 16 23.4522V29.0002C16 29.932 16 30.3979 16.1522 30.7654C16.3552 31.2555 16.7448 31.6449 17.2349 31.8479C17.6024 32.0001 18.0683 32.0001 19.0002 32.0001C19.9321 32.0001 20.3978 32.0001 20.7654 31.8479C21.2554 31.6449 21.6447 31.2555 21.8477 30.7654C21.9999 30.3979 22 29.932 22 29.0001V28.0001C22 26.8955 22.8954 26.0001 24 26.0001C25.1046 26.0001 26 26.8955 26 28.0001V29.0001C26 29.932 26 30.3979 26.1522 30.7654C26.3552 31.2555 26.7448 31.6449 27.2349 31.8479C27.6024 32.0001 28.0683 32.0001 29.0002 32.0001C29.9321 32.0001 30.3978 32.0001 30.7654 31.8479C31.2554 31.6449 31.6447 31.2555 31.8477 30.7654C31.9999 30.3979 32 29.932 32 29.0002Z"
        stroke="#0B0B0B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
