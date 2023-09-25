import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  status: "status-3" | "disqualify" | "active";
  className: any;
}

export const Status = ({ status, className }: Props): JSX.Element => {
  return (
    <div className={`status status-0-${status} ${className}`}>
      <div className="active-2">
        {status === "active" && <>Active</>}

        {status === "disqualify" && <>Disqualified</>}

        {status === "status-3" && <>Sub - Total</>}
      </div>
    </div>
  );
};

Status.propTypes = {
  status: PropTypes.oneOf(["status-3", "disqualify", "active"]),
};
