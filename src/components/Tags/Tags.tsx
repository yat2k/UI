import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "disabled" | "active" | "default";
  className: any;
  text: string;
}

export const Tags = ({ property1, className, text = "New York" }: Props): JSX.Element => {
  return (
    <div className={`tags property-1-${property1} ${className}`}>
      <div className="new-york">
        {property1 === "default" && <>{text}</>}

        {property1 === "disabled" && <>Disabled</>}

        {property1 === "active" && <>Active</>}
      </div>
    </div>
  );
};

Tags.propTypes = {
  property1: PropTypes.oneOf(["disabled", "active", "default"]),
  text: PropTypes.string,
};
