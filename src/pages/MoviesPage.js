import React, { useState, useEffect } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';

import OnLoader from '../components/OnLoader/OnLoader';
import { getMovieSearch } from '../components/Services/getMovieApi';
import MovieList from '../components/MovieList/MovieList';
import SearchFormMovies from '../components/SearchFormMovies/SearchFormMovies';

const MovieSearch = ({ history, location }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (searchParams.get('query')) {
      setIsLoading(true);
      getMovieSearch(searchParams.get('query'))
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          setOnError(error.message);
          alert(`${onError}`);
        })
        .finally(() => setIsLoading(false));
    }
  }, [setIsLoading, location.search, onError]);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
    setMovies([]);
  };

  const onQueryChange = () => {
    history.push({
      pathname: location.pathname,
      search: `query=${query.trim()}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    getMovieSearch(query.trim())
      .then((response) => {
        setMovies(response.data.results);
        onQueryChange();
      })
      .catch((error) => {
        setOnError(error.message);
        alert(`${onError}`);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <SearchFormMovies
        handleSubmit={handleSubmit}
        value={query}
        handleChange={handleChange}
      />
      {isLoading && <OnLoader />}

      <MovieList films={movies} />
    </>
  );
};

export default MovieSearch;
