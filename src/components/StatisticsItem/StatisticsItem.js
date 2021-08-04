import s from "./StatisticsItem.module.scss";
import PropTypes from "prop-types";

const StatisticsItem = ({ title, percentage }) => {
  return (
    <>
      <span className="label">{title}</span>
      <span className={s.percentege}>{percentage}%</span>
    </>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
