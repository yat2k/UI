/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Status } from "../Status";
import "./style.css";

interface Props {
  className: any;
  tagClassName: any;
  tag: string;
  text: string;
  statusStatus: any;
}

export const ProgramStatus = ({
  className,
  tagClassName,
  tag = "https://c.animaapp.com/NcdoIzsj/img/tag-33.svg",
  text = "Misk Traineeship",
  statusStatus = "active",
}: Props): JSX.Element => {
  return (
    <div className={`program-status ${className}`}>
      <img className={`tag-3 ${tagClassName}`} alt="Tag" src={tag} />
      <div className="frame-14">
        <div className="frame-15">
          <div className="frame-16">
            <div className="misk-traineeship">{text}</div>
          </div>
          <Status className="status-instance" status={statusStatus} />
        </div>
        <div className="frame-16">
          <div className="text-wrapper-23">Currently At Video Task</div>
        </div>
      </div>
    </div>
  );
};

ProgramStatus.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  statusStatus: PropTypes.string,
};
