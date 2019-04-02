import React from "react";
import PropTypes from "prop-types";
import CurrencyFormat from "react-currency-format";
import Circle from "react-circle";
import Loading from "components/Loading";
import styles from "./styles.scss";

const Detail = props => {
  if (props.loading) {
    return <LoadingRender />;
  } else {
    const { detailInfo } = props;
    return (
      <div className={styles.container}>
        <div className={styles.backgroundContainer}>
          <img
            className={styles.background}
            src={
              detailInfo.poster_path
                ? `${props.baseURL}/w500/${detailInfo.poster_path}`
                : require("images/nomovie.png")
            }
            alt={detailInfo.original_title}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <img
              src={
                detailInfo.poster_path
                  ? `${props.baseURL}/w500/${detailInfo.poster_path}`
                  : require("images/nomovie.png")
              }
              alt={detailInfo.original_title}
            />
          </div>
          <div className={styles.infoList}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>
                <p>{detailInfo.title}</p>
                <p className={styles.original}>{detailInfo.original_title}</p>
              </h3>
              <p className={styles.vote}>
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="1s" // String: Length of animation
                  responsive={true} // Boolean: Make SVG adapt to parent size
                  size="20" // String: Defines the size of the circle.
                  lineWidth="50" // String: Defines the thickness of the circle's stroke.
                  progress={props.tempAverage * 10} // String: Update to change the progress and percentage.
                  progressColor="#17A398" // String: Color of "progress" portion of circle.
                  bgColor="#3943B7"
                  roundedStroke={true} // Boolean: Rounded/Flat line ends
                  showPercentage={false} // Boolean: Show/hide percentage.
                  showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                />
                <span>{detailInfo.vote_average}</span>
              </p>
            </div>
            <div className={styles.info}>
              <p className={styles.date}>{`RELEASED DATE: ${
                detailInfo.release_date
              }`}</p>
              <p className={styles.overview}>{detailInfo.overview}</p>
              <p className={styles.homepage}>
                <a href={detailInfo.homepage}>{detailInfo.homepage}</a>
              </p>
              <p className={styles.genres}>
                {detailInfo.genres.map(genre => genre.name).join(", ")}
              </p>
              <p className={styles.boxoffice}>{detailInfo.popularity}</p>
              <p className={styles.revenue}>
                <CurrencyFormat
                  value={detailInfo.revenue}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$ "}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Detail.propTypes = {
  loading: PropTypes.bool.isRequired,
  detailInfo: PropTypes.shape({
    adult: PropTypes.bool.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    belongs_to_collection: PropTypes.object,
    budget: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    homepage: PropTypes.string,
    original_language: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    production_companies: PropTypes.array,
    production_countries: PropTypes.array,
    release_date: PropTypes.string.isRequired,
    revenue: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    spoken_languages: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.bool.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired
  })
};

const LoadingRender = () => (
  <div className={styles.loadingContainer}>
    <Loading />
  </div>
);

export default Detail;
