import { connect } from "react-redux";
import Container from "./container";
import { actionCreator as movieActions } from "redux/modules/movie";

const mapStateToProps = (state, ownProps) => {
  const {
    movie: { review }
  } = state;
  return {
    review
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return {
    getReview: () => {
      dispatch(movieActions.getReview(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
