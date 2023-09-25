import React from "react";
import "./style.css";

interface Props {
  className?: any;
  divClassName?: any;
}

export const Pn = ({ className, divClassName }: Props): JSX.Element => {
  return (
    <div className={`PN ${className}`}>
      <div className="overlap-group">
        <div className={`text-wrapper ${divClassName}`}>SIP</div>
      </div>
    </div>
  );
};
