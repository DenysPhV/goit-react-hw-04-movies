import React, { lazy, useState, useEffect, Suspense } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import routes from '../components/Services/routes';
import contextProps from '../components/Services/context';
import { getMovieDetailId } from '../components/Services/getMovieApi';

const CastSection = lazy(() =>
  import(
    '../components/CastSection/CastSection' /*webpackChunkName: "cast-page" */
  ),
);
const ReviewsSection = lazy(() =>
  import(
    '../components/ReviewsSection/ReviewsSection' /*webpackChunkName: "reviews-page" */
  ),
);

const MovieDetailPage = ({ match }) => {
  const location = useLocation();
  const history = useHistory();

  const initialState = {
    isLoading: false,
    poster_path: null,
    vote_average: null,
    title: null,
    genres: [],
    overview: null,
    release_date: null,
  };

  const [state, setState] = useState(initialState);

  const handleGoBack = () => {
    history.push(location?.state?.from || routes.home);
  };

  useEffect(() => {
    const { movieId } = match.params;
    setState((prev) => ({ ...prev, isLoading: true }));
    getMovieDetailId(movieId)
      .then((response) =>
        setState((prev) => ({
          ...prev,
          ...response.data,
          poster_path: `https://image.tmdb.org/t/p/w300${
            response.data.poster_path && response.data.poster_path
          }`,
          release_date: response.data.release_date.slice(0, 4),
          isLoading: false,
        })),
      )
      .catch((error) =>
        setState((prev) => ({ ...prev, error, isLoading: false })),
      );
  }, [match.params]);

  const { poster_path } = state;

  return (
    <contextProps.Provider value={{ ...state, handleGoBack }}>
      <>
        {state.isLoading}
        {poster_path ? (
          <>
            <Suspense>
              <Switch>
                <Route
                  exact
                  path={`${match.path}/cast`}
                  component={CastSection}
                />
                <Route
                  exact
                  path={`${match.path}/reviews`}
                  component={ReviewsSection}
                />
              </Switch>
            </Suspense>
          </>
        ) : (
          <p>We don't have any description for this movie.</p>
        )}
      </>
    </contextProps.Provider>
  );
};

export default MovieDetailPage;