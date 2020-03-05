import { GET_MOVIE, GET_MOVIE_ACTION, GET_MOVIE_DRAMA, GET_MOVIE_ADVENTURE} from "../actions/types";

const initialState = {
  movies: [],
  errors: null
};

const getMovies = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE:
      return {
        ...state,
        movies: payload
      };
    case GET_MOVIE_ACTION:
      return {
        ...state,
        movies: payload
      };
    case GET_MOVIE_DRAMA:
      return {
        ...state,
        movies: payload
      };
    case GET_MOVIE_ADVENTURE:
      return {
        ...state,
        movies: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default getMovies;
