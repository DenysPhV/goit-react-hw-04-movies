import PropTypes from 'prop-types';

import s from './SearchFormMovies.module.css';
const SearchFormMovies = ({ handleSubmit, query, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          <input
            type="text"
            placeholder="typing movie title..."
            value={query}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </>
  );
};

SearchFormMovies.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchFormMovies;
