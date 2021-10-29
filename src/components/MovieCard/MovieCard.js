import React, { useContext } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

import contextProps from '../Services/context';

import s from './MovieCard.module.css';

const MovieCard = () => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    handleGoBack,
  } = useContext(contextProps);

  return (
    <div className={s.Container}>
      <button type="button" onClick={handleGoBack} className={s.BtnGoBack}>
        <BsArrowLeftShort size="2em" />
        Go back
      </button>

      <div className={s.Card}>
        <div className={s.ImgContainer}>
          <img src={poster_path} alt={title} className={s.Poster} />
        </div>
        <div className={s.Description}>
          <h2>{`${title} (${release_date})`}</h2>
          <p>User Score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>

          {genres.length > 0 && <h3>Genres</h3>}
          {genres.length > 0 && genres.map(({ name }) => name).join(' ')}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
