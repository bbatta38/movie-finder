import { connect } from "react-redux";
import Container from "./container";
import { actionCreator as movieActions } from "redux/modules/movie";

const mapStateToProps = (state, ownProps) => {
  const {
    movie: { detailInfo }
  } = state;
  return {
    detailInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return {
    getDetail: () => {
      dispatch(movieActions.getDetail(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
