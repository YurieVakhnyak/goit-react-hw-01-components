import PropTypes from 'prop-types';

// export function getRandom(min, max) {
//   return Math.ceil(Math.random() * (max - min) + min);
// }

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <div className="statBox">
        {(title.length > 0 || title == null) && (
          <h2 className="title">{title}</h2>
        )}

        <ul className="statList">
          {stats.map(data => (
            <li className="item" key={data.id}>
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
