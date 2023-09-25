interface Props {
  className: any;
}

export const StatusDefaultLabelOpportunityHub = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`status-default-label-opportunity-hub ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21 25.5L27 28.5M27 19.5L21 22.5M30 33C28.3431 33 27 31.6569 27 30C27 28.3431 28.3431 27 30 27C31.6569 27 33 28.3431 33 30C33 31.6569 31.6569 33 30 33ZM18 27C16.3431 27 15 25.6569 15 24C15 22.3431 16.3431 21 18 21C19.6569 21 21 22.3431 21 24C21 25.6569 19.6569 27 18 27ZM30 21C28.3431 21 27 19.6569 27 18C27 16.3431 28.3431 15 30 15C31.6569 15 33 16.3431 33 18C33 19.6569 31.6569 21 30 21Z"
        stroke="#0B0B0B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
