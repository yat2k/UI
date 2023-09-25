import PropTypes from "prop-types";
import React from "react";
import { Frame42731930212 } from "../../icons/Frame42731930212";
import { Frame42731930218 } from "../../icons/Frame42731930218";
import { Frame42731930221 } from "../../icons/Frame42731930221";
import { Frame4273193023 } from "../../icons/Frame4273193023";
import { StatusActiveLabelOpportunityHub } from "../../icons/StatusActiveLabelOpportunityHub";
import { StatusActiveLabelTrackStatus } from "../../icons/StatusActiveLabelTrackStatus";
import { StatusDefaultLabelBack } from "../../icons/StatusDefaultLabelBack";
import { StatusDefaultLabelDashboard } from "../../icons/StatusDefaultLabelDashboard";
import { StatusDefaultLabelEmployerHub } from "../../icons/StatusDefaultLabelEmployerHub";
import { StatusDefaultLabelInterviewManager } from "../../icons/StatusDefaultLabelInterviewManager";
import { StatusDefaultLabelOpportunityHub } from "../../icons/StatusDefaultLabelOpportunityHub";
import { StatusDefaultLabelReports } from "../../icons/StatusDefaultLabelReports";
import { StatusDefaultLabelSettings } from "../../icons/StatusDefaultLabelSettings";
import { StatusDefaultLabelSharing } from "../../icons/StatusDefaultLabelSharing";
import { StatusDefaultLabelToDo } from "../../icons/StatusDefaultLabelToDo";
import { StatusDefaultLabelTrackStatus } from "../../icons/StatusDefaultLabelTrackStatus";
import { Pn } from "../Pn";
import "./style.css";

interface Props {
  type: "expanded" | "default";
  user: "provider" | "candidate" | "employer" | "program-application" | "provider-1080";
  className: any;
}

export const SideNav = ({ type, user, className }: Props): JSX.Element => {
  return (
    <div className={`side-nav user-${user} type-4-${type} ${className}`}>
      <div className="frame-17">
        <div className="frame-18">
          <div className="ellipse-2" />
        </div>
        {["candidate", "employer", "program-application", "provider"].includes(user) && (
          <div className="frame-19">
            {type === "default" && ["candidate", "employer", "provider"].includes(user) && (
              <StatusDefaultLabelDashboard className="frame-20" />
            )}

            {user === "program-application" && type === "default" && (
              <>
                <Pn className="PN-instance" />
                <StatusDefaultLabelBack className="frame-20" />
              </>
            )}

            {type === "default" && user === "employer" && <StatusDefaultLabelInterviewManager className="frame-20" />}

            {type === "default" && ["employer", "provider"].includes(user) && (
              <Frame42731930221 className="frame-20" color="#0B0B0B" />
            )}

            {type === "default" && user === "employer" && <StatusDefaultLabelBack className="frame-20" />}

            {user === "candidate" && type === "default" && (
              <>
                <StatusDefaultLabelToDo className="frame-20" />
                <StatusDefaultLabelTrackStatus className="frame-20" />
                <StatusActiveLabelOpportunityHub className="frame-20" />
                <StatusDefaultLabelBack className="frame-20" />
              </>
            )}

            {type === "expanded" && ["candidate", "employer", "provider"].includes(user) && (
              <div className="side-nav-lables">
                <StatusDefaultLabelDashboard className="frame-20" />
                <div className="div-5">Dashboard</div>
              </div>
            )}

            {user === "provider" && type === "expanded" && (
              <div className="side-nav-lables-2">
                <Frame42731930221 className="frame-20" color="#1D4ED8" />
                <div className="text-wrapper-24">Candidate Bank</div>
              </div>
            )}

            {type === "expanded" && ["candidate", "employer", "provider"].includes(user) && (
              <div className="side-nav-lables">
                {user === "candidate" && <StatusDefaultLabelToDo className="frame-20" />}

                {["employer", "provider"].includes(user) && <Frame42731930212 className="frame-20" />}

                <div className="div-5">
                  {user === "candidate" && <>To-Do</>}

                  {["employer", "provider"].includes(user) && <>Interview Manager</>}
                </div>
              </div>
            )}

            {type === "expanded" && ["employer", "provider"].includes(user) && (
              <>
                <div className="side-nav-lables">
                  {user === "employer" && <Frame42731930221 className="frame-20" color="#0B0B0B" />}

                  {user === "provider" && <StatusDefaultLabelOpportunityHub className="frame-20" />}

                  <div className="div-5">
                    {user === "employer" && <>Candidate Lists</>}

                    {user === "provider" && <>Opportunity Hub</>}
                  </div>
                </div>
                <div className="side-nav-lables">
                  {user === "provider" && <Frame42731930218 className="frame-20" />}

                  {user === "employer" && <StatusDefaultLabelBack className="frame-20" />}

                  <div className="div-5">
                    {user === "provider" && <>Employer List</>}

                    {user === "employer" && <>Go Back</>}
                  </div>
                </div>
              </>
            )}

            {user === "provider" && type === "expanded" && (
              <>
                <div className="side-nav-lables">
                  <StatusDefaultLabelReports className="frame-20" />
                  <div className="div-5">Reports</div>
                </div>
                <div className="side-nav-lables">
                  <StatusDefaultLabelSharing className="frame-20" />
                  <div className="div-5">Wishlist</div>
                </div>
                <div className="side-nav-lables">
                  <StatusDefaultLabelBack className="frame-20" />
                  <div className="div-5">Go Back</div>
                </div>
              </>
            )}

            {user === "candidate" && type === "expanded" && (
              <>
                <div className="side-nav-lables-2">
                  <StatusActiveLabelTrackStatus className="frame-20" />
                  <div className="text-wrapper-24">Track Status</div>
                </div>
                <div className="side-nav-lables">
                  <StatusDefaultLabelOpportunityHub className="frame-20" />
                  <div className="div-5">Open Opportunities</div>
                </div>
                <div className="side-nav-lables">
                  <StatusDefaultLabelBack className="frame-20" />
                  <div className="div-5">Go Back</div>
                </div>
              </>
            )}

            {user === "program-application" && type === "expanded" && (
              <>
                <div className="side-nav-lables-3">
                  <Pn className="PN-2" />
                  <p className="text-wrapper-25">Summer Internship Local Program C2 London</p>
                </div>
                <div className="side-nav-program">
                  <div className="opportunity-hub">Applied</div>
                  <div className="element-2">1256</div>
                </div>
                <div className="side-nav-program">
                  <div className="opportunity-hub">Shortlisted</div>
                  <div className="element-2">873</div>
                </div>
                <div className="side-nav-program">
                  <div className="opportunity-hub">Technical Interview</div>
                  <div className="element-2">652</div>
                </div>
                <div className="side-nav-program-2">
                  <div className="applied">Opportunity Hub</div>
                  <div className="element-3">492</div>
                </div>
                <div className="side-nav-program">
                  <div className="opportunity-hub">Video Interview I</div>
                  <div className="element-2">343</div>
                </div>
                <div className="side-nav-program">
                  <div className="opportunity-hub">Video Interview II</div>
                  <div className="element-2">388</div>
                </div>
                <div className="side-nav-program">
                  <div className="opportunity-hub">Video Interview III</div>
                  <div className="element-2">321</div>
                </div>
                <div className="side-nav-lables-4">
                  <StatusDefaultLabelBack className="frame-20" />
                  <div className="go-back">Go Back Home</div>
                </div>
              </>
            )}

            {user === "provider" && type === "default" && (
              <>
                <StatusDefaultLabelInterviewManager className="frame-20" />
                <StatusActiveLabelOpportunityHub className="frame-20" />
                <StatusDefaultLabelEmployerHub className="frame-20" />
                <StatusDefaultLabelReports className="frame-20" />
                <StatusDefaultLabelSharing className="frame-20" />
                <StatusDefaultLabelBack className="frame-20" />
              </>
            )}
          </div>
        )}

        {user === "provider-1080" && (
          <img className="frame-21" alt="Frame" src="https://c.animaapp.com/NcdoIzsj/img/frame-427319297.svg" />
        )}
      </div>
      <div className="frame-22">
        {type === "default" && ["candidate", "employer", "provider"].includes(user) && (
          <StatusDefaultLabelSettings className="frame-20" />
        )}

        {user === "provider-1080" && (
          <img className="frame-23" alt="Frame" src="https://c.animaapp.com/NcdoIzsj/img/frame-427319304-6.svg" />
        )}

        {((type === "default" && user === "candidate") ||
          (type === "default" && user === "employer") ||
          (type === "default" && user === "provider") ||
          user === "provider-1080") && (
          <div className="frame-18">
            <div className="frame-24">
              <div className="text-wrapper-26">AS</div>
            </div>
          </div>
        )}

        {user === "program-application" && (
          <div className="frame-25">
            {type === "default" && (
              <div className="frame-26">
                <div className="text-wrapper-27">AS</div>
              </div>
            )}

            {type === "expanded" && (
              <>
                <div className="frame-18">
                  <div className="frame-26">
                    <div className="text-wrapper-27">AS</div>
                  </div>
                </div>
                <div className="frame-27">
                  <div className="text-wrapper-28">Aaliyah Shaker</div>
                  <div className="text-wrapper-29">aaliya@gmail.com</div>
                </div>
              </>
            )}
          </div>
        )}

        {type === "expanded" && ["candidate", "employer", "provider"].includes(user) && (
          <>
            <div className="side-nav-lables">
              <Frame4273193023 className="frame-20" />
              <div className="div-5">Settings</div>
            </div>
            <div className="frame-28">
              <div className="frame-18">
                <div className="frame-26">
                  <div className="text-wrapper-27">AS</div>
                </div>
              </div>
              <div className="frame-27">
                <div className="text-wrapper-28">Aaliyah Shaker</div>
                <div className="text-wrapper-29">aaliya@gmail.com</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

SideNav.propTypes = {
  type: PropTypes.oneOf(["expanded", "default"]),
  user: PropTypes.oneOf(["provider", "candidate", "employer", "program-application", "provider-1080"]),
};
