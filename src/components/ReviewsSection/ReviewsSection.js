import React, { useState, useEffect } from 'react';

import { getMovieReviewId } from '../Services/getMovieApi';

const ReviewsSection = ({ match }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState(null);

  useEffect(() => {
    const { movieId } = match.params;
    setIsLoading(true);
    getMovieReviewId(movieId)
      .then((response) => setReviews(response.data.results))
      .catch((error) => {
        setOnError(error.message);
        alert(onError);
      })
      .finally(() => setIsLoading(false));
  }, [match.params, onError]);

  return (
    <div>
      {isLoading}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default ReviewsSection;
