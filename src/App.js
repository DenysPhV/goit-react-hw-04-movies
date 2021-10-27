import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import s from './App.module.css';
import routes from './components/Services/routes';

import Navigation from './components/Navigation/Navigation';
import OnLoader from './components/OnLoader/OnLoader';

const HomePage = lazy(() =>
  import('./pages/HomePage' /*webpackChunkName: "home-page"*/),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /*webpackChunkName: "movie-page"*/),
);

const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /*webpackChunkName: "movie-details-page"*/),
);

const App = () => {
  return (
    <div className={s.container}>
      <Navigation />
      <Suspense fallback={<OnLoader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;

/* 
      <Cast />
      <Reviews /> */
