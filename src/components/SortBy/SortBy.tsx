import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  frameClassName: any;
  hasEditSortAscending: boolean;
  text: string;
}

export const SortBy = ({
  className,
  frameClassName,
  hasEditSortAscending = true,
  text = "Sort by",
}: Props): JSX.Element => {
  return (
    <div className={`sort-by ${className}`}>
      <div className={`frame-13 ${frameClassName}`}>
        {hasEditSortAscending && (
          <img
            className="edit-sort-ascending"
            alt="Edit sort ascending"
            src="https://c.animaapp.com/NcdoIzsj/img/edit---sort-ascending.svg"
          />
        )}

        <div className="text-wrapper-21">{text}</div>
      </div>
    </div>
  );
};

SortBy.propTypes = {
  hasEditSortAscending: PropTypes.bool,
  text: PropTypes.string,
};
