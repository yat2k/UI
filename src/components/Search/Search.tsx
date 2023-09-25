import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className?: any;
  frameClassName: any;
  text?: string;
  warningCircleClassName: any;
  inputType?: string;
}

export const Search = ({
  className,
  frameClassName,
  text = "Filter by name, edu, exp or #tag",
  warningCircleClassName,
  inputType = "text",
}: Props): JSX.Element => {
  return (
    <div className={`search ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <img
          className="interface-search"
          alt="Interface search"
          src="https://c.animaapp.com/NcdoIzsj/img/interface---search-magnifying-glass-3.svg"
        />
        <input className="filter-by-name-edu" placeholder={text} type={inputType} />
      </div>
      <img
        className={`warning-circle ${warningCircleClassName}`}
        alt="Warning circle"
        src="https://c.animaapp.com/NcdoIzsj/img/warning---circle-warning-2.svg"
      />
    </div>
  );
};

Search.propTypes = {
  text: PropTypes.string,
  inputType: PropTypes.string,
};
