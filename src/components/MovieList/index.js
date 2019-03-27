import { connect } from "react-redux";
import Container from "./container";
import { actionCreator as movieActions } from "redux/modules/movie";

const mapStateToProps = (state, ownProps) => {
  const {
    movie: { pageNum, movieList }
  } = state;
  return {
    pageNum: pageNum,
    movieList: movieList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMovieList: sortBy => {
      dispatch(movieActions.getMovieList(sortBy));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
