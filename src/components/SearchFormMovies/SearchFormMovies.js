import PropTypes from 'prop-types';
const SearchFormMovies = ({ handleSubmit, query, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="typing movie title..."
            value={query}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Search</button>
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
