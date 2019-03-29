import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieList from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getMovieList: PropTypes.func.isRequired,
    genres: PropTypes.array,
    pageNum: PropTypes.number,
    movieList: PropTypes.shape({
      page: PropTypes.number.isRequired,
      total_pages: PropTypes.number.isRequired,
      results: PropTypes.arrayOf(PropTypes.object),
      total_results: PropTypes.number.isRequired
    })
  };
  componentDidMount() {
    const { getMovieList } = this.props;
    getMovieList("popularity.desc");
    /* 
        sort options

        popularity.asc
        popularity.desc
        release_date.asc
        release_date.desc
        original_title.asc
        original_title.desc
        vote_average.asc
        vote_average.desc
     */
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.movieList && nextProps.genres) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return <MovieList {...this.state} {...this.props} />;
  }
}

export default Container;
