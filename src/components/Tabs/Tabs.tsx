import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  status: "default-w-number" | "default-WO-number" | "active";
  className?: any;
  text?: string;
  lineClassName?: any;
  line?: string;
  divClassName?: any;
  text1?: string;
}

export const Tabs = ({
  status,
  className,
  text = "Tab Name",
  lineClassName,
  line = "https://c.animaapp.com/NcdoIzsj/img/line-29-2.svg",
  divClassName,
  text1 = "Tab N",
}: Props): JSX.Element => {
  return (
    <div className={`tabs status-${status} ${className}`}>
      {["default-WO-number", "default-w-number"].includes(status) && (
        <div className="frame-7">
          {status === "default-w-number" && (
            <>
              <div className={`tab-n ${divClassName}`}>{text1}</div>
              <div className="frame-8">
                <div className="text-wrapper-14">77777</div>
              </div>
            </>
          )}

          {status === "default-WO-number" && <div className={`tab-n-2 ${divClassName}`}>{text1}</div>}
        </div>
      )}

      {status === "active" && (
        <>
          <div className="tab-name-wrapper">
            <div className="tab-name">{text}</div>
          </div>
          <img className={`line ${lineClassName}`} alt="Line" src={line} />
        </>
      )}
    </div>
  );
};

Tabs.propTypes = {
  status: PropTypes.oneOf(["default-w-number", "default-WO-number", "active"]),
  text: PropTypes.string,
  line: PropTypes.string,
  text1: PropTypes.string,
};
