import React from "react";
import { Link } from "react-router-dom";
import Circle from "react-circle";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const MovieItem = props => {
  const { baseURL, genreName } = props;
  return (
    <li className={styles.movie}>
      <Link to={`/movie-finder/detail/${props.id}`}>
        <div className={styles.movieImgWrap}>
          <img
            src={
              props.poster_path
                ? `${baseURL}/w300_and_h450_bestv2${props.poster_path}`
                : require("images/nomovie.png")
            }
            alt={props.title}
          />
        </div>
        <div className={styles.movieInfo}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.genres}>
            {genreName ? genreName.join(", ") : ""}
          </p>
          <p className={styles.avg}>
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" // String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size="100" // String: Defines the size of the circle.
              lineWidth="50" // String: Defines the thickness of the circle's stroke.
              progress={props.vote_average * 10} // String: Update to change the progress and percentage.
              progressColor="#17A398" // String: Color of "progress" portion of circle.
              bgColor="transparents"
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={false} // Boolean: Show/hide percentage.
              showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
            />
            <span>{props.vote_average}</span>
          </p>
        </div>
      </Link>
    </li>
  );
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
