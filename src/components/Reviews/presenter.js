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

const RenderReviews = props => (
  <div className={styles.reviewContainer}>
    <ul>
      {props.review.results.map(review => {
        return <ReviewItem {...review} key={review.id} />;
      })}
    </ul>
  </div>
);

export default Reviews;
