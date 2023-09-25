import PropTypes from "prop-types";
import React from "react";
import { CandidateTag } from "../CandidateTag";
import { Tags } from "../Tags";
import "./style.css";

interface Props {
  className?: any;
  VDOClassName: any;
  polygon: string;
  candidateTagClose?: string;
  candidateTagImg?: string;
  editAddPlusCircle?: string;
  href: string;
}

export const CandidateProgram = ({
  className,
  VDOClassName,
  polygon = "https://c.animaapp.com/NcdoIzsj/img/polygon-1-2.svg",
  candidateTagClose = "https://c.animaapp.com/NcdoIzsj/img/close-6.svg",
  candidateTagImg = "https://c.animaapp.com/NcdoIzsj/img/close-6.svg",
  editAddPlusCircle = "https://c.animaapp.com/NcdoIzsj/img/edit---add-plus-circle-2.svg",
  href,
}: Props): JSX.Element => {
  return (
    <div className={`candidate-program ${className}`}>
      <div className="frame-4">
        <div className="frame-5">
          <div className={`VDO ${VDOClassName}`}>
            <img className="polygon" alt="Polygon" src={polygon} />
          </div>
        </div>
        <div className="frame-6">
          <div className="weq">
            <div className="text-wrapper-9">Aaliyah Sanderson</div>
            <div className="div-3">
              <Tags className="design-component-instance-node" property1="default" text="New York" />
              <Tags className="design-component-instance-node" property1="default" text="Marketing" />
              <Tags className="design-component-instance-node" property1="default" text="London" />
            </div>
          </div>
          <div className="div-3">
            <div className="text-wrapper-10">Saudi Arabia</div>
            <div className="text-wrapper-10">|</div>
            <a className="text-wrapper-10" href={href} rel="noopener noreferrer" target="_blank">
              aaliyahs@gmail.com
            </a>
            <div className="text-wrapper-10">|</div>
            <div className="text-wrapper-10">+00 000 000 0000</div>
          </div>
          <div className="div-4">
            <CandidateTag
              className="design-component-instance-node"
              close={candidateTagClose}
              property1="default"
              text="#top_candidate"
            />
            <CandidateTag
              className="design-component-instance-node"
              close={candidateTagImg}
              property1="default"
              text="#marketing_june"
            />
            <button className="button">
              <img className="edit-add-plus-circle" alt="Edit add plus circle" src={editAddPlusCircle} />
              <div className="text-wrapper-11">Add tag</div>
            </button>
          </div>
        </div>
        <div className="overall-score">
          <div className="div-4">
            <div className="text-wrapper-12">Overall Score</div>
          </div>
          <div className="placement-tag">
            <div className="text-wrapper-13">7</div>
          </div>
        </div>
        <div className="contact-details">
          <p className="p">Applied on 12 June 2023</p>
        </div>
      </div>
    </div>
  );
};

CandidateProgram.propTypes = {
  polygon: PropTypes.string,
  candidateTagClose: PropTypes.string,
  candidateTagImg: PropTypes.string,
  editAddPlusCircle: PropTypes.string,
  href: PropTypes.string,
};
