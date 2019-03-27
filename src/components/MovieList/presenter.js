import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import MovieItem from "components/MovieItem";

const MovieList = props => {
  if (props.loading) {
    return <RenderLoading />;
  } else {
    return <RenderList {...props} />;
  }
};

MovieList.propTypes = {
  loading: PropTypes.bool.isRequired,
  movieList: PropTypes.shape({
    page: PropTypes.number.isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    total_pages: PropTypes.number.isRequired,
    total_results: PropTypes.number.isRequired
  })
};

const RenderLoading = props => (
  <div className={styles.loadingContainer}>
    <Loading />
  </div>
);

const RenderList = props => {
  const { movieList } = props;
  return (
    <div className={styles.movieList}>
      <ul>
        {movieList.results.map(movie => (
          <MovieItem {...movie} key={movie.id} />
        ))}
      </ul>
      <div>
        <span>{`${movieList.page} / ${movieList.total_pages}`}</span>
      </div>
    </div>
  );
};

export default MovieList;
