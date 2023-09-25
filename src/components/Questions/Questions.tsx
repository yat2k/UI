/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DataTypeTag } from "../DataTypeTag";
import { DataTypeValues } from "../DataTypeValues";
import { DataTypes } from "../DataTypes";
import "./style.css";

interface Props {
  type: "m-choice" | "default";
  className: any;
  dataTypesType: any;
  dataTypeTagType: any;
  lineClassName: any;
  line: string;
  dataTypeValuesValue?: any;
}

export const Questions = ({
  type,
  className,
  dataTypesType = "video",
  dataTypeTagType = "variant-5",
  lineClassName,
  line = "https://c.animaapp.com/NcdoIzsj/img/line-33-14.svg",
  dataTypeValuesValue = "short-answer",
}: Props): JSX.Element => {
  return (
    <div className={`questions ${className}`}>
      <DataTypes className="data-types-instance" type={dataTypesType} />
      <div className="q">
        <div className="jni">
          <DataTypeTag type={dataTypeTagType} />
          <img className={`line-2 ${lineClassName}`} alt="Line" src={line} />
        </div>
        <p className="text-wrapper-22">
          What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select
          multiple options that apply
        </p>
        {type === "default" && <DataTypeValues className="data-type-values-instance" value={dataTypeValuesValue} />}

        {type === "m-choice" && (
          <div className="m-choice">
            <DataTypeValues className="data-type-values-2" value="multichoice" />
            <DataTypeValues className="data-type-values-2" value="multichoice" />
            <DataTypeValues className="data-type-values-2" value="multichoice" />
            <DataTypeValues className="data-type-values-2" value="multichoice" />
          </div>
        )}
      </div>
    </div>
  );
};

Questions.propTypes = {
  type: PropTypes.oneOf(["m-choice", "default"]),
  dataTypesType: PropTypes.string,
  dataTypeTagType: PropTypes.string,
  line: PropTypes.string,
  dataTypeValuesValue: PropTypes.string,
};
