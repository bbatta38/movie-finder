// import

// action

const API_KEY = "bee0d63d5bdfa55d91c5a69bf156a26a";

const MOVIE_LIST = "MOVIE_LIST";
const DETAIL_INFO = "DETAIL_INFO";
const GENRES = "GENRES";

// action creator

function setMovieList(movieList) {
  return {
    type: MOVIE_LIST,
    movieList
  };
}

function setDetail(detailInfo) {
  return {
    type: DETAIL_INFO,
    detailInfo
  };
}

function setGenres(genres) {
  return {
    type: GENRES,
    genres
  };
}

// API actions

function getMovies(sortBy) {
  return async (dispatch, getState) => {
    const {
      movie: { pageNum, isAdult, genres }
    } = getState();
    let genreList;
    if (genres.length === 0) {
      genreList = await getGenres();
      dispatch(setGenres(genreList));
    }
    const movieList = await getMovieList({ pageNum, isAdult, sortBy });

    if (movieList) {
      dispatch(setMovieList(movieList));
    }
  };
}

function getDetail(id) {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(json => dispatch(setDetail(json)));
  };
}

function getMovieList(info) {
  const { pageNum, isAdult, sortBy } = info;
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortBy}&include_adult=${isAdult}&include_video=true&page=${pageNum}`
  )
    .then(response => response.json())
    .then(json => json);
}

function getGenres() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  )
    .then(response => response.json())
    .then(json => json.genres);
}

// initialState
const initialState = {
  pageNum: 1,
  isAdult: true,
  baseURL: "http://image.tmdb.org/t/p/",
  genres: []
};
// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return applyMovieList(state, action);
    case DETAIL_INFO:
      return applyDetailInfo(state, action);
    case GENRES:
      return applyGenres(state, action);
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

function applyDetailInfo(state, action) {
  const { detailInfo } = action;
  return {
    ...state,
    detailInfo
  };
}

function applyGenres(state, action) {
  const { genres } = action;
  return {
    ...state,
    genres
  };
}

// export

const actionCreator = {
  getMovies,
  getDetail
};

export { actionCreator };

// export default

export default reducer;
