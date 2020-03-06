import { GET_MOVIE, GET_MOVIE_FILTER} from "../actions/types";

const initialState = {
  movies: false,
  genres: false,
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
    case GET_MOVIE_FILTER:
      return {
        ...state,
        genres: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default getMovies;
