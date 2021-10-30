import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import s from './MovieList.module.css';

const MovieList = ({ films, title, location }) => {
  return (
    <>
      <h2>{title}</h2>

      <ul className={s.FilmList}>
        {films &&
          films.map(({ id, title }) => (
            <li key={id} className={s.FilmListItem}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
              >
                <p>{title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }),
  ),
};

export default withRouter(MovieList);
