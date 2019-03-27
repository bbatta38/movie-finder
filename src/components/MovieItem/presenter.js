import React from "react";
import PropTypes from "prop-types";

const MovieItem = props => {
  return <li>{props.title}</li>;
};

MovieItem.propTypes = {
  adult: PropTypes.bool.isRequired,
  backdrop_path: PropTypes.string,
  genre_id: PropTypes.arrayOf(PropTypes.number),
  original_language: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  video: PropTypes.bool.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired
};

export default MovieItem;
