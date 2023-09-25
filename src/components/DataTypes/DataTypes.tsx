import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  type: "multi-choice" | "yes-no" | "number" | "dropdown" | "date" | "para" | "short-answer" | "video" | "file-upload";
  className: any;
}

export const DataTypes = ({ type, className }: Props): JSX.Element => {
  return (
    <div className={`data-types ${className}`}>
      <div className={`ellipse ${type}`} />
    </div>
  );
};

DataTypes.propTypes = {
  type: PropTypes.oneOf([
    "multi-choice",
    "yes-no",
    "number",
    "dropdown",
    "date",
    "para",
    "short-answer",
    "video",
    "file-upload",
  ]),
};
