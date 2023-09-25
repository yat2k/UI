import PropTypes from "prop-types";
import React from "react";
import { Checkbox } from "../Checkbox";
import { Tags } from "../Tags";
import "./style.css";

interface Props {
  type?: "active" | "default";
  className?: any;
  text?: string;
  text1?: string;
  textClassName?: any;
  divClassName?: any;
  text2?: string;
}

export const ApplicationProgram = ({
  type,
  className,
  text = "AS",
  text1 = "Aaliyah Sanderson",
  textClassName,
  divClassName,
  text2 = "Bachelor in Marketing",
}: Props): JSX.Element => {
  return (
    <div className={`application-program ${className}`}>
      <Checkbox className="instance-node" label={false} status="inactive" />
      <div className={`candidate-search type-0-${type}`}>
        <div className="frame-2">
          <div className="AS-wrapper">
            <div className="AS">{text}</div>
          </div>
          <div className="frame-3">
            <div className="aaliyah-sanderson">{text1}</div>
            <div className="text-wrapper-6">Saudi Arabia</div>
            <div className="EDU">
              <div className={`text ${type === "default" ? textClassName : undefined}`}>
                <div className={`text-wrapper-7 ${type === "default" ? divClassName : undefined}`}>{text2}</div>
              </div>
              <div className="text-wrapper-7">(2023 - 2023)</div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-8">#top_candidate</div>
              <div className="text-wrapper-8">#top_candidate</div>
            </div>
            <div className="div-2">
              <Tags className="instance-node" property1="default" text="New York" />
              <Tags className="instance-node" property1="default" text="Marketing" />
              <Tags className="instance-node" property1="default" text="London" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ApplicationProgram.propTypes = {
  type: PropTypes.oneOf(["active", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
