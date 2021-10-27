import React, { useState, useEffect } from 'react';

import OnLoader from '../components/OnLoader/OnLoader';
import { getMovieTrends } from '../components/Services/getMovieApi';

import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMovieTrends()
      .then((response) => {
        setFilms(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setOnError(error.message);
        onError && alert(`${onError}`);
      })
      .finally(() => setIsLoading(false));
  }, [onError]);

  return (
    <>
      {isLoading && <OnLoader />}
      <MovieList films={films} title="Popular movies are:" />
    </>
  );
};

export default HomePage;
