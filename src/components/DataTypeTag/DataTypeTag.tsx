import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  type:
    | "default"
    | "variant-5"
    | "variant-2"
    | "variant-3"
    | "number"
    | "variant-9"
    | "variant-4"
    | "date"
    | "file-upload";
}

export const DataTypeTag = ({ type }: Props): JSX.Element => {
  return (
    <div className={`data-type-tag type-2-${type}`}>
      <div className="paragraph">
        {type === "default" && <>Paragraph</>}

        {type === "variant-2" && <>Short Answer</>}

        {type === "variant-3" && <>Yes / No</>}

        {type === "variant-4" && <>Dropdown</>}

        {type === "variant-5" && <>Multiple Choice</>}

        {type === "date" && <>Date</>}

        {type === "number" && <>Number</>}

        {type === "file-upload" && <>File Upload</>}

        {type === "variant-9" && <>Video Upload</>}
      </div>
    </div>
  );
};

DataTypeTag.propTypes = {
  type: PropTypes.oneOf([
    "default",
    "variant-5",
    "variant-2",
    "variant-3",
    "number",
    "variant-9",
    "variant-4",
    "date",
    "file-upload",
  ]),
};
