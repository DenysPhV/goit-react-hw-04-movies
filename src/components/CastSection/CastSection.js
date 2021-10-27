import React, { useState, useEffect } from 'react';

import { getMovieCastId } from '../Services/getMovieApi';

const CastSection = ({ match }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState(null);

  useEffect(() => {
    isLoading(true);
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
      {isLoading}
      <div>
        {cast.length > 0 ? (
          cast.map(({ cast_id, character, name, profile_path }) => (
            <li key={cast_id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              )}
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    </>
  );
};

export default CastSection;
