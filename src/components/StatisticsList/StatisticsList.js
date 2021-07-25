import StatisticsItem from "../StatisticsItem/StatisticsItem";
import Container from "../Container/Container";

// { id, label, percentage } - деструктуризация
// percentage ? <li>текс</li> : <p>Отсутствует</p> --- Если данные приходят рендерим li если нет P

const StatisticsList = ({ list }) => {
  return (
    <section class="statistics">
      <Container>
        <h2 className="title">Upload stats</h2>
        <ul>
          {list.map(({ id, label, percentage }) =>
            percentage ? (
              <li key={id}>
                <StatisticsItem title={label} percentage={percentage} />
              </li>
            ) : (
              <p>{label} Недоступен</p>
            )
          )}
        </ul>
      </Container>
    </section>
  );
};

export default StatisticsList;
