import s from "./StatisticsItem.module.scss";

const StatisticsItem = ({ title, percentage }) => {
  return (
    <>
      <span className="label">{title}</span>
      <span className={s.percentege}>{percentage}%</span>
    </>
  );
};

export default StatisticsItem;
