import React from "react";

const ReviewItem = props => (
  <li>
    <span>{props.author}</span>
    <span>{props.content}</span>
  </li>
);

export default ReviewItem;
