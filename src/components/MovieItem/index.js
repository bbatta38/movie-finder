import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    movie: { baseURL, genres }
  } = state;
  return {
    baseURL,
    genres
  };
};

export default connect(mapStateToProps)(Container);
