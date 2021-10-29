import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// import { makeSlug } from '../Services/slug';
import s from './MovieList.module.css';

const MovieList = ({ films, title, name }) => {
  const history = useHistory();
  const [, setMovies] = useState();

  useEffect(() => {
    setMovies(films);
  }, [films]);

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
                  state: {
                    ref: history.location.pathname,
                    search: history.location.search,
                  },
                }}
              >
                <p title={title}>{title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieList;
