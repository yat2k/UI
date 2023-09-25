import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  label: boolean;
  status: "inactive" | "active";
  className: any;
}

export const Checkbox = ({ label, status, className }: Props): JSX.Element => {
  return (
    <div className={`checkbox ${className}`}>
      <div className={`checkbox-active ${status}`}>
        {status === "inactive" && <div className="plate" />}

        {status === "active" && (
          <img className="check" alt="Check" src="https://c.animaapp.com/NcdoIzsj/img/check-3.svg" />
        )}
      </div>
      {label && <div className="div">Lorem ipsum</div>}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.bool,
  status: PropTypes.oneOf(["inactive", "active"]),
};
