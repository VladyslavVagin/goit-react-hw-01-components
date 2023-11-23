import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistic}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        
        {stats.map(({ id, label, percentage }) => (
            <li className={css.item} key={id} style={{ backgroundColor: randomHexColor() }}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>)
        )}

      </ul>
    </section>
  );
};

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16789215).toString(16)}`;
}

export default Statistics;
