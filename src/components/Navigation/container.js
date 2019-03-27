import React, { Component } from "react";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    searchText: ""
  };
  render() {
    return (
      <Navigation
        searchText={this.state.searchText}
        {...this.props}
        onChange={this._onChange}
        onSubmit={this._onSubmit}
      />
    );
  }

  _onSubmit = event => {
    const { searchText } = this.state;
    event.preventDefault();
    console.log(searchText);
  };

  _onChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchText: value
    });
  };
}

export default Container;
