import PropTypes from "prop-types";
import React from "react";
import { ApplicationProgram } from "../ApplicationProgram";
import { CandidateProgram } from "../CandidateProgram";
import { Education } from "../Education";
import { Pn } from "../Pn";
import { ProgramStatus } from "../ProgramStatus";
import { QualifiedBar } from "../QualifiedBar";
import { Questions } from "../Questions";
import { Search } from "../Search";
import { SideNav } from "../SideNav";
import { SortBy } from "../SortBy";
import { Tabs } from "../Tabs";
import { WorkExperience } from "../WorkExperience";
import "./style.css";

interface Props {
  href: string;
}

export const ProgramApplication = ({ href }: Props): JSX.Element => {
  return (
    <div className="program-application">
      <div className="overlap">
        <div className="frame-29">
          <div className="left-side">
            <div className="program-title">
              <Pn className="PN-3" divClassName="PN-4" />
              <div className="div-6">
                <div className="text-wrapper-30">|</div>
              </div>
              <div className="application-stages-wrapper">
                <div className="application-stages">
                  <div className="edf">
                    <div className="stage-name">
                      <div className="text-wrapper-31">Opportunity Browsing</div>
                    </div>
                    <div className="div-6">
                      <div className="text-wrapper-32">|</div>
                    </div>
                    <div className="div-6">
                      <div className="text-wrapper-31">2325</div>
                    </div>
                    <div className="seperator">
                      <div className="text-wrapper-33">|</div>
                    </div>
                  </div>
                  <img
                    className="img-2"
                    alt="Arrow caret down MD"
                    src="https://c.animaapp.com/NcdoIzsj/img/arrow---caret-down-md-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="search-filter">
              <Search
                className="search-instance"
                frameClassName="search-2"
                text="Serach by name, edu, exp or #tag"
                warningCircleClassName="search-3"
              />
              <img className="tag-4" alt="Tag" src="https://c.animaapp.com/NcdoIzsj/img/tag-27.svg" />
            </div>
            <QualifiedBar className="qualified-bar-instance" type="default" />
            <div className="candidate-list">
              <ApplicationProgram
                className="design-component-instance-node-2"
                divClassName="application-program-instance"
                text="FR"
                text1="Frances R. Kostka"
                text2="Bachelor in Information Technology and Cyber Security"
                textClassName="application-program-candidate-card"
                type="default"
              />
              <ApplicationProgram
                className="design-component-instance-node-2"
                text="AS"
                text1="Aaliyah Sanderson"
                text2="Bachelor in Marketing"
                type="active"
              />
              <ApplicationProgram
                className="design-component-instance-node-2"
                text="MD"
                text1="Michael D. McKee"
                text2="Bachelor in Finance"
                type="default"
              />
              <img className="line-3" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-33-12.svg" />
              <ApplicationProgram
                className="design-component-instance-node-2"
                text="CR"
                text1="Christel R. Sclafani"
                text2="Bachelor in Bio-chemical Engineering"
                type="default"
              />
              <img className="line-3" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-33-12.svg" />
              <ApplicationProgram
                className="design-component-instance-node-2"
                text="JS"
                text1="Jerry S. Pollock"
                text2="Bachelor in Marketing"
                type="default"
              />
              <img className="line-3" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-33-12.svg" />
              <ApplicationProgram
                className="design-component-instance-node-2"
                text="JS"
                text1="Jerry S. Pollock"
                text2="Bachelor in Marketing"
                type="default"
              />
              <img className="line-4" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-35-3@2x.png" />
              <ApplicationProgram
                className="design-component-instance-node-2"
                text="AS"
                text1="Aaliyah Sanderson"
                text2="Bachelor in Marketing"
                type="default"
              />
            </div>
          </div>
          <div className="frame-30">
            <CandidateProgram
              VDOClassName="candidate-program-application-card"
              candidateTagClose="https://c.animaapp.com/NcdoIzsj/img/close-3.svg"
              candidateTagImg="https://c.animaapp.com/NcdoIzsj/img/close-3.svg"
              className="design-component-instance-node-2"
              editAddPlusCircle="https://c.animaapp.com/NcdoIzsj/img/edit---add-plus-circle-1.svg"
              href={href}
              polygon="https://c.animaapp.com/NcdoIzsj/img/polygon-1-1.svg"
            />
            <div className="container">
              <div className="tabs-2">
                <Tabs
                  className="tabs-instance"
                  line="https://c.animaapp.com/NcdoIzsj/img/line-29-1.svg"
                  lineClassName="frame-31"
                  status="active"
                  text="Profile"
                />
                <Tabs className="frame-32" divClassName="frame-33" status="default-WO-number" text1="Video" />
                <Tabs className="frame-32" divClassName="frame-33" status="default-WO-number" text1="Evaluation" />
                <Tabs className="frame-32" divClassName="frame-33" status="default-WO-number" text1="Placement" />
                <Tabs className="frame-32" divClassName="frame-33" status="default-WO-number" text1="Compliance" />
                <Tabs className="frame-32" divClassName="frame-33" status="default-WO-number" text1="Notes" />
              </div>
              <div className="detail-cards">
                <div className="frame-34">
                  <div className="frame-35">
                    <div className="div-7">
                      <div className="text-wrapper-34">Personal Information</div>
                      <div className="wishlist" />
                    </div>
                    <div className="div-7">
                      <div className="frame-36">
                        <img className="tag-5" alt="Tag" src="https://c.animaapp.com/NcdoIzsj/img/tag-25.svg" />
                        <div className="frame-37">
                          <div className="text-wrapper-35">Nationality</div>
                          <div className="text-wrapper-36">Sri Lankan</div>
                        </div>
                      </div>
                      <div className="frame-36">
                        <img className="tag-5" alt="Tag" src="https://c.animaapp.com/NcdoIzsj/img/tag-23.svg" />
                        <div className="frame-37">
                          <div className="text-wrapper-35">National ID</div>
                          <div className="text-wrapper-36">0000000000</div>
                        </div>
                      </div>
                    </div>
                    <div className="div-7">
                      <div className="frame-36">
                        <img className="tag-5" alt="Tag" src="https://c.animaapp.com/NcdoIzsj/img/tag-21.svg" />
                        <div className="frame-37">
                          <div className="text-wrapper-35">Gender</div>
                          <div className="text-wrapper-36">Female</div>
                        </div>
                      </div>
                      <div className="frame-36">
                        <img className="tag-5" alt="Tag" src="https://c.animaapp.com/NcdoIzsj/img/tag-19.svg" />
                        <div className="frame-37">
                          <div className="text-wrapper-35">Date of Birth</div>
                          <div className="text-wrapper-36">00-00-0000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-35">
                    <div className="div-7">
                      <div className="text-wrapper-34">Education</div>
                      <div className="wishlist" />
                    </div>
                    <Education
                      className="design-component-instance-node-2"
                      frameClassName="education-instance"
                      tag="https://c.animaapp.com/NcdoIzsj/img/tag-17.svg"
                    />
                    <img className="line-3" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-34-5.svg" />
                    <Education
                      className="design-component-instance-node-2"
                      frameClassName="education-instance"
                      tag="https://c.animaapp.com/NcdoIzsj/img/tag-17.svg"
                    />
                  </div>
                  <div className="frame-35">
                    <div className="div-7">
                      <div className="text-wrapper-34">Work Experience</div>
                      <div className="wishlist" />
                    </div>
                    <WorkExperience
                      className="design-component-instance-node-2"
                      tag="https://c.animaapp.com/NcdoIzsj/img/tag-13.svg"
                    />
                    <img className="line-3" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-34-5.svg" />
                    <WorkExperience
                      className="design-component-instance-node-2"
                      tag="https://c.animaapp.com/NcdoIzsj/img/tag-11@2x.png"
                      tagClassName="work-experience-instance"
                    />
                  </div>
                  <div className="frame-35">
                    <div className="div-7">
                      <div className="text-wrapper-34">Resume</div>
                      <div className="resume-actions">
                        <div className="wishlist-2">
                          <img
                            className="edit-show"
                            alt="Edit show"
                            src="https://c.animaapp.com/NcdoIzsj/img/tag-11@2x.png"
                          />
                        </div>
                        <img
                          className="wishlist-3"
                          alt="Wishlist"
                          src="https://c.animaapp.com/NcdoIzsj/img/tag-11@2x.png"
                        />
                      </div>
                    </div>
                    <div className="rectangle-2" />
                  </div>
                  <div className="frame-38">
                    <div className="div-7">
                      <div className="text-wrapper-34">Additional Questions</div>
                      <div className="div-6">
                        <SortBy
                          className="sort-by-instance"
                          frameClassName="sort-by-2"
                          hasEditSortAscending={false}
                          text="Sort"
                        />
                      </div>
                    </div>
                    <Questions
                      className="design-component-instance-node-2"
                      dataTypeTagType="variant-2"
                      dataTypeValuesValue="short-answer"
                      dataTypesType="short-answer"
                      line="https://c.animaapp.com/NcdoIzsj/img/line-33-9.png"
                      lineClassName="questions-instance"
                      type="default"
                    />
                    <Questions
                      className="design-component-instance-node-2"
                      dataTypeTagType="variant-9"
                      dataTypesType="video"
                      line="https://c.animaapp.com/NcdoIzsj/img/line-33-9.png"
                      lineClassName="questions-2"
                      type="default"
                    />
                    <Questions
                      className="design-component-instance-node-2"
                      dataTypeTagType="number"
                      dataTypeValuesValue="paragrapgh"
                      dataTypesType="number"
                      line="https://c.animaapp.com/NcdoIzsj/img/line-33-9.png"
                      lineClassName="questions-3"
                      type="default"
                    />
                    <img className="line-5" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-33-9.png" />
                    <Questions
                      className="design-component-instance-node-2"
                      dataTypeTagType="variant-5"
                      dataTypesType="multi-choice"
                      line="https://c.animaapp.com/NcdoIzsj/img/line-33-9.png"
                      lineClassName="questions-4"
                      type="m-choice"
                    />
                    <Questions
                      className="design-component-instance-node-2"
                      dataTypeTagType="variant-4"
                      dataTypeValuesValue="short-answer"
                      dataTypesType="dropdown"
                      line="https://c.animaapp.com/NcdoIzsj/img/line-33-9.png"
                      lineClassName="questions-5"
                      type="default"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-39">
              <div className="text-wrapper-37">Enrolled Other Programs</div>
              <ProgramStatus
                className="design-component-instance-node-2"
                statusStatus="active"
                tag="https://c.animaapp.com/NcdoIzsj/img/tag-11@2x.png"
                tagClassName="program-status-instance"
                text="Misk Traineeship"
              />
              <img className="line-6" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-33-9.png" />
              <ProgramStatus
                className="design-component-instance-node-2"
                statusStatus="disqualify"
                tag="https://c.animaapp.com/NcdoIzsj/img/tag-11@2x.png"
                tagClassName="program-status-2"
                text="Summer Internship"
              />
              <img className="line-7" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-33-9.png" />
              <ProgramStatus
                className="design-component-instance-node-2"
                statusStatus="disqualify"
                tag="https://c.animaapp.com/NcdoIzsj/img/tag-11@2x.png"
                tagClassName="program-status-3"
                text="XYZ Traineeship"
              />
              <img className="line-8" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-33-9.png" />
              <ProgramStatus
                className="design-component-instance-node-2"
                statusStatus="active"
                tag="https://c.animaapp.com/NcdoIzsj/img/tag-11@2x.png"
                tagClassName="program-status-4"
                text="London Internship"
              />
            </div>
          </div>
          <div className="div-8">
            <img className="tag-6" alt="Tag" src="https://c.animaapp.com/NcdoIzsj/img/tag-1.svg" />
            <div className="edit">
              <img
                className="img-2"
                alt="File note edit"
                src="https://c.animaapp.com/NcdoIzsj/img/file---note-edit-2.svg"
              />
            </div>
            <img
              className="img-3"
              alt="Copy candidate"
              src="https://c.animaapp.com/NcdoIzsj/img/copy-candidate-1.svg"
            />
            <img className="img-4" alt="Disqualify" src="https://c.animaapp.com/NcdoIzsj/img/disqualify-1.svg" />
            <img className="img-4" alt="Placement" src="https://c.animaapp.com/NcdoIzsj/img/placement-1.svg" />
            <img
              className="img-3"
              alt="Schedule interview"
              src="https://c.animaapp.com/NcdoIzsj/img/schedule-interview-1.svg"
            />
            <img className="img-3" alt="Email" src="https://c.animaapp.com/NcdoIzsj/img/email-1.svg" />
            <img className="line-9" alt="Line" src="https://c.animaapp.com/NcdoIzsj/img/line-37-2.svg" />
            <div className="frame-40">
              <div className="frame-41">
                <p className="text-wrapper-38">Move To Video Interview I</p>
              </div>
              <div className="frame-42" />
              <img className="frame-43" alt="Frame" src="https://c.animaapp.com/NcdoIzsj/img/frame-444-1.svg" />
            </div>
          </div>
        </div>
        <img
          className="arrow-caret-circle"
          alt="Arrow caret circle"
          src="https://c.animaapp.com/NcdoIzsj/img/arrow---caret-circle-left-1.svg"
        />
      </div>
      <SideNav className="side-nav-instance" type="default" user="provider" />
    </div>
  );
};

ProgramApplication.propTypes = {
  href: PropTypes.string,
};
