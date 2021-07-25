const StatisticsItem = ({ title, percentage }) => {
  return (
    <>
      <span className="label">{title}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};

export default StatisticsItem;
