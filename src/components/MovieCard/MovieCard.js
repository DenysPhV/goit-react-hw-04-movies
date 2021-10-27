import React, { useContext } from 'react';

import contextProps from '../Services/context';

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
    <div>
      <button type="button" onClick={handleGoBack}>
        {/* <BsArrowLeftShort size="2em" /> */}
        Go back
      </button>

      <div>
        <div>
          <img src={poster_path} alt={title} />
        </div>
        <div>
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
