import {
  GET_MOVIES,
  ADD_MOVIE,
  REMOVE_MOVIE,
  GET_MOVIE_DETAIL
} from "../actions";

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: undefined
  };

  export default function reducer (state = initialState, {type, payload}){
    switch (type){
      case GET_MOVIES: 
        return ({
          ...state, 
          moviesLoaded: payload.Search,
        });
      case ADD_MOVIE: 
        return { 
          ...state,
          moviesFavourites: [...state.moviesFavourites, payload] 
        };
      case REMOVE_MOVIE: 
        return { 
          ...state, 
          moviesFavourites: state.moviesFavourites.filter(
            ({imdbID}) => imdbID !== payload
            ) 
          };
      case GET_MOVIE_DETAIL: 
        return {...state, movieDetail: payload};
      default: 
        return state
    }
  }