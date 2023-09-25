import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1?: "without-close" | "default";
  className?: any;
  close?: string;
  text?: string;
}

export const CandidateTag = ({
  property1,
  className,
  close = "https://c.animaapp.com/NcdoIzsj/img/close-6.svg",
  text = "#top_candidate",
}: Props): JSX.Element => {
  return (
    <div className={`candidate-tag ${className}`}>
      <div className="top-candidate">{text}</div>
      {property1 === "default" && <img className="close" alt="Close" src={close} />}
    </div>
  );
};

CandidateTag.propTypes = {
  property1: PropTypes.oneOf(["without-close", "default"]),
  close: PropTypes.string,
  text: PropTypes.string,
};
