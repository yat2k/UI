import PropTypes from "prop-types";
import "./style.css";

interface Props {
  className?: any;
  tag?: string;
  tagClassName?: any;
}

export const WorkExperience = ({
  className,
  tag = "https://c.animaapp.com/NcdoIzsj/img/tag-32.svg",
  tagClassName,
}: Props): JSX.Element => {
  return (
    <div className={`work-experience ${className}`}>
      <img className={`tag-2 ${tagClassName}`} alt="Tag" src={tag} />
      <div className="frame-11">
        <div className="text-wrapper-18">Cyber Security Intern</div>
        <div className="frame-12">
          <div className="text-wrapper-19">Coop Training</div>
          <div className="text-wrapper-20">|</div>
          <div className="text-wrapper-20">Saudi Arabia</div>
          <div className="text-wrapper-20">|</div>
          <div className="frame-12">
            <div className="frame-12">
              <div className="text-wrapper-20">Jan 2022</div>
              <div className="text-wrapper-20">-</div>
              <div className="text-wrapper-20">Jan 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkExperience.propTypes = {
  tag: PropTypes.string,
};
