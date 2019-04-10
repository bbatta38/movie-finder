import React, { Component } from "react";
import PropTypes from "prop-types";
import Reviews from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getReview: PropTypes.func.isRequired
  };
  render() {
    const { review } = this.props;
    return <Reviews {...this.state} review={review} />;
  }

  componentDidMount() {
    const { getReview } = this.props;
    getReview();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.review) {
      this.setState({
        loading: false
      });
    }
  }
}

export default Container;
