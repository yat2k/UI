import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  value:
    | "yes-no"
    | "number"
    | "dropdown"
    | "multichoice"
    | "date"
    | "short-answer"
    | "video"
    | "file-upload"
    | "paragrapgh"
    | "value-10";
  className: any;
}

export const DataTypeValues = ({ value, className }: Props): JSX.Element => {
  return (
    <div className={`data-type-values value-${value} ${className}`}>
      <div className="dorem-ipsum-dolor">
        {value === "paragrapgh" && (
          <p className="text-wrapper-39">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
            sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
            bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        )}

        {value === "short-answer" && (
          <p className="text-wrapper-39">Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        )}

        {value === "yes-no" && <>Yes</>}

        {value === "dropdown" && <>Social Media</>}

        {value === "multichoice" && <>New York</>}

        {value === "date" && <p className="text-wrapper-39">12 - 06 - 2023</p>}

        {value === "number" && <>1234567890</>}

        {value === "file-upload" && <>View File</>}

        {["value-10", "video"].includes(value) && (
          <div className="group">
            {value === "video" && (
              <div className="overlap-group-2">
                <div className="rectangle" />
                <img className="vector" alt="Vector" src="https://c.animaapp.com/NcdoIzsj/img/vector-119-1.svg" />
              </div>
            )}

            {value === "value-10" && (
              <>
                <div className="rectangle" />
                <img className="vector-2" alt="Vector" src="https://c.animaapp.com/NcdoIzsj/img/vector-119.svg" />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

DataTypeValues.propTypes = {
  value: PropTypes.oneOf([
    "yes-no",
    "number",
    "dropdown",
    "multichoice",
    "date",
    "short-answer",
    "video",
    "file-upload",
    "paragrapgh",
    "value-10",
  ]),
};
