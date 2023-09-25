/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkbox } from "../Checkbox";
import "./style.css";

interface Props {
  type: "qualified" | "disqualified" | "default";
  className: any;
}

export const QualifiedBar = ({ type, className }: Props): JSX.Element => {
  return (
    <div className={`qualified-bar ${className}`}>
      <Checkbox className="checkbox-instance" label={false} status={type === "default" ? "inactive" : "active"} />
      <div className="text-wrapper-2">|</div>
      <div className="candidate-status-bar">
        <div className={`sdfs ${type}`}>
          <div className="disqualified-2">
            {type === "disqualified" && <>Disqualified</>}

            {type === "default" && <>Qualified</>}

            {type === "qualified" && <>Selected</>}
          </div>
          {["default", "disqualified"].includes(type) && (
            <div className="element-wrapper">
              <div className="element">
                {type === "disqualified" && <>78</>}

                {type === "default" && <>247</>}
              </div>
            </div>
          )}
        </div>
        {type === "default" && (
          <>
            <div className="text-wrapper-3">|</div>
            <div className="sdfs-2">
              <div className="text-wrapper-4">Task</div>
              <div className="div-wrapper">
                <div className="text-wrapper-5">25</div>
              </div>
            </div>
            <div className="text-wrapper-3">|</div>
            <div className="sdfs-2">
              <div className="text-wrapper-4">Disqualified</div>
              <div className="div-wrapper">
                <div className="text-wrapper-5">78</div>
              </div>
            </div>
          </>
        )}

        {["disqualified", "qualified"].includes(type) && (
          <img
            className="tag"
            alt="Tag"
            src={
              type === "disqualified"
                ? "https://c.animaapp.com/NcdoIzsj/img/tag-28.svg"
                : "https://c.animaapp.com/NcdoIzsj/img/tag-29.svg"
            }
          />
        )}
      </div>
    </div>
  );
};

QualifiedBar.propTypes = {
  type: PropTypes.oneOf(["qualified", "disqualified", "default"]),
};
