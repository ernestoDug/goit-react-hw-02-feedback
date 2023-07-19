import PropTypes from 'prop-types';
import css from './Statistics.module.css';

// компонент статистики
const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
      {/* рендер за умовою аш 2 */}
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// прототайпи
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
