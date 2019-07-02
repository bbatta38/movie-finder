import React from "react";
import styles from "./styles.scss";

const ReviewItem = props => {
  const { content } = props;
  let tempContent = "";
  if (content.length > 400) {
    tempContent = `${content.substring(0, 400)} ...`;
  } else {
    tempContent = `${content}`;
  }
  return (
    <li className={styles.reviewList}>
      <p className={styles.author}>{props.author}</p>
      <div className={styles.contentWrapper}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <p className={styles.content}>{tempContent}</p>
        </a>
      </div>
    </li>
  );
};

export default ReviewItem;
