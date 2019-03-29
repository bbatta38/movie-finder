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
    const { temp_average, genreName } = this.state;
    return (
      <MovieItem
        {...this.props}
        temp_average={temp_average}
        genreName={genreName}
      />
    );
  }
  componentDidMount() {
    const { vote_average, genre_ids, genres } = this.props;
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
    setTimeout(() => {
      this.setState({
        temp_average: vote_average
      });
    }, 500);
  }
}

export default Container;
