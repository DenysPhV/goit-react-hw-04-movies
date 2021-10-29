import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// import { makeSlug } from '../Services/slug';
import s from './MovieList.module.css';

const MovieList = ({ films, title }) => {
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
          films.map(({ id, poster_path, title, name }) => (
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
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  title={title}
                  className={s.FilmListImg}
                />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieList;
