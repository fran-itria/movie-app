const apiKey = "ac257d80";

export const GET_MOVIES = "GET_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";

export function getMovies(titulo) {
  return async function (dispatch) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`
    );
    const payload = await response.json();
    dispatch({
      type: GET_MOVIES,
      payload,
    });
  };
}

export function getMovieDetail(id) {
  return async function (dispatch) {
    if (id) {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
      );
      const payload = await response.json();
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload,
      });
    } else {
      dispatch({ type: GET_MOVIE_DETAIL });
    }
  };
}

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
}

export function removeMovie(id) {
  return {
    type: REMOVE_MOVIE,
    payload: id,
  };
}
