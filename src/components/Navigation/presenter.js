import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = props => (
  <header className={styles.container}>
    <h1 className={styles.logo}>
      <Link to="/movie-finder/">
        <FontAwesomeIcon icon={faTicketAlt} color="white" size="2x" />
        <span className={styles.logoText}>Movie Finder</span>
      </Link>
    </h1>
    <div className={styles.searchContainer}>
      <form onSubmit={props.onSubmit}>
        <input
          className={styles.searchInput}
          type="search"
          value={props.searchText}
          onChange={props.onChange}
          placeholder="Search for a movie..."
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
  </header>
);

Navigation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
};

export default Navigation;
