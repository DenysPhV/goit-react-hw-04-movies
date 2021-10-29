import React, { useState, useEffect } from 'react';
import OnLoader from '../OnLoader/OnLoader';

import { getMovieCastId } from '../Services/getMovieApi';

import s from './CastSection.module.css';

const CastSection = ({ match }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const { movieId } = match.params;
    getMovieCastId(movieId)
      .then((response) => setCast(response.data.cast))
      .catch((error) => {
        setOnError(error.message);
        alert(onError);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params, onError]);

  return (
    <>
      {isLoading && <OnLoader />}
      <div className={s.Container}>
        <ul className={s.CastList}>
          {cast.length > 0 ? (
            cast.map(({ cast_id, character, name, profile_path }) => (
              <li key={cast_id} className={s.CastItem}>
                {profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                    className={s.CastImg}
                  />
                )}
                <div className={s.ContainerItem}>
                  <h3 className={s.CastTitle}>{name}</h3>
                  <p className={s.CastDesc}>Character: {character}</p>
                </div>
              </li>
            ))
          ) : (
            <p>We don't have any reviews for this movie.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default CastSection;
