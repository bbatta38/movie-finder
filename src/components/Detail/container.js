import React, { Component } from "react";
import PropTypes from "prop-types";
import Detail from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getDetail: PropTypes.func.isRequired
  };
  componentDidMount() {
    const { getDetail } = this.props;
    getDetail();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.detailInfo !== this.props.detailInfo) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return <Detail {...this.state} />;
  }
}

export default Container;
