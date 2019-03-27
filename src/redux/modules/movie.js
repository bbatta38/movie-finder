// import

// action

const API_KEY = "bee0d63d5bdfa55d91c5a69bf156a26a";

const MOVIE_LIST = "MOVIE_LIST";

// action creator

function setMovieList(movieList) {
  return {
    type: MOVIE_LIST,
    movieList
  };
}

// API actions

function getMovieList(sortBy) {
  return (dispatch, getState) => {
    const { pageNum } = getState();
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortBy}&include_adult=true&include_video=true&page=${pageNum}`
    )
      .then(response => response.json())
      .then(json => dispatch(setMovieList(json)));
  };
}

// initialState
const initialState = {
  pageNum: 1
};
// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return applyMovieList(state, action);
    default:
      return state;
  }
};

// reducer functions

function applyMovieList(state, action) {
  const { movieList } = action;
  return {
    ...state,
    movieList
  };
}

// export

const actionCreator = {
  getMovieList
};

export { actionCreator };

// export default

export default reducer;
