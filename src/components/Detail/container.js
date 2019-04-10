import React, { Component } from "react";
import PropTypes from "prop-types";
import Detail from "./presenter";

class Container extends Component {
  state = {
    loading: true,
    tempAverage: 0
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
    setTimeout(() => {
      this.setState({
        ...this.state,
        tempAverage: nextProps.detailInfo.vote_average
      });
    }, 500);
  }

  render() {
    const { detailInfo, baseURL, match } = this.props;
    return (
      <Detail
        {...this.state}
        tempAverage={this.state.tempAverage}
        detailInfo={detailInfo}
        baseURL={baseURL}
        match={match}
      />
    );
  }
}

export default Container;
