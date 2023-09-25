import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  tag: string;
  frameClassName: any;
}

export const Education = ({
  className,
  tag = "https://c.animaapp.com/NcdoIzsj/img/tag-31.svg",
  frameClassName,
}: Props): JSX.Element => {
  return (
    <div className={`education ${className}`}>
      <img className="img" alt="Tag" src={tag} />
      <div className={`frame-9 ${frameClassName}`}>
        <div className="text-wrapper-15">Bachelor in Biochemistry</div>
        <div className="frame-10">
          <div className="text-wrapper-16">King Saud University</div>
          <div className="text-wrapper-17">|</div>
          <div className="text-wrapper-17">Saudi Arabia</div>
          <div className="text-wrapper-17">|</div>
          <div className="frame-10">
            <div className="frame-10">
              <div className="text-wrapper-17">Jan 2022</div>
              <div className="text-wrapper-17">-</div>
              <div className="text-wrapper-17">Jan 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Education.propTypes = {
  tag: PropTypes.string,
};
