import React from "react";
import Loading from "components/Loading";
import styles from "./styles.scss";

const Detail = props => {
  if (props.loading) {
    return <LoadingRender />;
  } else {
    return <div>detail</div>;
  }
};

const LoadingRender = () => (
  <div className={styles.loadingContainer}>
    <Loading />
  </div>
);

export default Detail;
