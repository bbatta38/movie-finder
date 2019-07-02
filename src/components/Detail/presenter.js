import React from "react";
import PropTypes from "prop-types";
import CurrencyFormat from "react-currency-format";
import Circle from "react-circle";
import Moment from "react-moment";
import Loading from "components/Loading";
import Reviews from "components/Reviews";
import styles from "./styles.scss";

const Detail = props => {
  if (props.loading) {
    return <LoadingRender />;
  } else {
    const { detailInfo, match } = props;
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
                  animate={true}
                  animationDuration="1s"
                  responsive={true}
                  size="20"
                  lineWidth="50"
                  progress={props.tempAverage * 10}
                  progressColor="#17A398"
                  bgColor="#3943B7"
                  roundedStroke={true}
                  showPercentage={false}
                  showPercentageSymbol={false}
                />
                <span>{detailInfo.vote_average}</span>
              </p>
            </div>
            <div className={styles.info}>
              <p className={styles.overview}>{detailInfo.overview}</p>
              <p>
                <span className={styles.title}>Release date</span>
                <span>
                  <Moment format="MMMM YYYY">{detailInfo.release_date}</Moment>
                </span>
              </p>
              <p>
                <span className={styles.title}>Budget</span>
                <span>
                  <CurrencyFormat
                    value={detailInfo.budget}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$ "}
                  />
                </span>
              </p>
              <p>
                <span className={styles.title}>Runtime</span>
                <span>{`${detailInfo.runtime} minutes`}</span>
              </p>
              <p
                className={styles.homepage}
                style={detailInfo.homepage ? { "": "" } : { display: "none" }}
              >
                <span className={styles.title}>Homepage</span>
                <span>
                  <a href={detailInfo.homepage}>{detailInfo.homepage}</a>
                </span>
              </p>
              <p>
                <span className={styles.title}>Genres</span>
                <span>
                  {detailInfo.genres.map(genre => genre.name).join(", ")}
                </span>
              </p>
              <p>
                <span className={styles.title}>Status</span>
                <span>{detailInfo.status}</span>
              </p>
              <p>
                <span className={styles.title}>Popularity</span>
                <span>{detailInfo.popularity}</span>
              </p>
              <p>
                <span className={styles.title}>Revenue</span>
                <span>
                  <CurrencyFormat
                    value={detailInfo.revenue}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$ "}
                  />
                </span>
              </p>
            </div>
            <Reviews match={match} />
          </div>
        </div>
      </div>
    );
  }
};

Detail.propTypes = {
  loading: PropTypes.bool.isRequired,
  detailInfo: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    belongs_to_collection: PropTypes.object,
    budget: PropTypes.number,
    genres: PropTypes.array,
    homepage: PropTypes.string,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    production_companies: PropTypes.array,
    production_countries: PropTypes.array,
    release_date: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    spoken_languages: PropTypes.array,
    status: PropTypes.string,
    tagline: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number
  })
};

const LoadingRender = () => (
  <div className={styles.loadingContainer}>
    <Loading />
  </div>
);

export default Detail;
