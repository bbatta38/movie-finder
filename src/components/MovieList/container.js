import React, { Component } from "react";
import MovieList from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    const { getMovieList } = this.props;
    getMovieList("vote_average.desc");
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
    if (nextProps.movieList) {
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
