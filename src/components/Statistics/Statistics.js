import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.scss';
import randomColor from './randoColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item"
            style={{
              backgroundColor: randomColor(),
            }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, percentage: PropTypes.number }),
  ),
};

export default Statistics;
