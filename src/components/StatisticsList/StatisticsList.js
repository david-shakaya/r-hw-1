import StatisticsItem from "../StatisticsItem/StatisticsItem";
import Container from "../Container/Container";
import s from "./StatisticsList.module.scss";
import PropTypes from "prop-types";

// { id, label, percentage } - деструктуризация
// percentage ? <li>текс</li> : <p>Отсутствует</p> --- Если данные приходят рендерим li если нет P

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const StatisticsList = ({ list }) => {
  return (
    <section className={s.statistics}>
      <Container>
        <h2 className={s.title}>Upload stats</h2>
        <ul className={s.list}>
          {list.map(({ id, label, percentage }) =>
            percentage ? (
              <li
                className={s.list_item}
                key={id}
                style={{
                  backgroundColor: randomColor(),
                }}
              >
                <StatisticsItem title={label} percentage={percentage} />
              </li>
            ) : (
              <li key={id} className={s.not_found}>
                <span className={s.label}> {label}</span>
                <span className={s.percentage}>Недоступен </span>
              </li>
            )
          )}
        </ul>
      </Container>
    </section>
  );
};

StatisticsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
