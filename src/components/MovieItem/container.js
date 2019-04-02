import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieItem from "./presenter";

class Container extends Component {
  state = {
    temp_average: 0
  };
  static propTypes = {
    baseURL: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    genre_ids: PropTypes.array.isRequired
  };
  render() {
    const { genreName } = this.state;
    return <MovieItem {...this.props} genreName={genreName} />;
  }
  componentDidMount() {
    const { genre_ids, genres } = this.props;
    const genreName = genre_ids.map(genre_id => {
      const nameList = [];
      genres.forEach(genre => {
        if (genre.id === genre_id) {
          nameList.push(genre.name);
        }
      });
      return nameList.join("");
    });
    this.setState({
      genreName
    });
  }
}

export default Container;
