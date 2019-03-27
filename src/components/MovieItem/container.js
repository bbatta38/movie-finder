import React, { Component } from "react";
import MovieItem from "./presenter";

class Container extends Component {
  render() {
    return <MovieItem {...this.props} />;
  }
}

export default Container;
