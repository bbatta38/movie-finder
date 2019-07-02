import React from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading";
import ReviewItem from "components/ReviewItem";

import styles from "./styles.scss";

const Reviews = props => {
  if (props.loading) {
    return <RenderLoading />;
  } else {
    return <RenderReviews {...props} />;
  }
};

Reviews.propTypes = {
  loading: PropTypes.bool.isRequired
};

const RenderLoading = () => (
  <div className={styles.loadingContainer}>
    <Loading />
  </div>
);

const RenderReviews = props => {
  const { results } = props.review;
  if (results.length === 0) {
    return "";
  } else {
    return (
      <div className={styles.reviewContainer}>
        <h3 className={styles.review}>Review</h3>
        <ul className={styles.reviewList}>
          {results.map(review => {
            return <ReviewItem {...review} key={review.id} />;
          })}
        </ul>
      </div>
    );
  }
};

export default Reviews;
