import React from "react";
import PropTypes from "prop-types";

const Navigation = props => (
  <div>
    <img src="" alt="Movie Finder" />
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="search"
          value={props.searchText}
          onChange={props.onChange}
        />
      </form>
    </div>
  </div>
);

Navigation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
};

export default Navigation;
