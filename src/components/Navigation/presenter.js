import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = props => (
  <div className={styles.container}>
    <span className={styles.logo}>
      <FontAwesomeIcon icon={faTicketAlt} color="white" size="2x" />
      <span className={styles.logoText}>Movie Finder</span>
    </span>
    <div className={styles.searchContainer}>
      <form onSubmit={props.onSubmit}>
        <input
          className={styles.searchInput}
          type="search"
          value={props.searchText}
          onChange={props.onChange}
          placeholder="movie name"
        />
        <button
          type="button"
          onClick={props.onSubmit}
          className={styles.button}
        >
          <FontAwesomeIcon
            icon={faSearch}
            color="white"
            className={styles.searchIcon}
          />
        </button>
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
