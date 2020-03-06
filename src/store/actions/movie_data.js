import {GET_MOVIE, ERROR} from "./types";
const baseURL = "https://awesome-movie-data.herokuapp.com/api/v1";

export const getMovies = (pageNumber) => async dispatch => {
    try {
        const res = await fetch (`${baseURL}/movies/all/?page=${pageNumber}`);
        const data = await res.json();
        dispatch({
            type: GET_MOVIE,
            payload: data.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}

export const GET_MOVIE_FILTER = (action) => async dispatch => {
    try {
        const res = await fetch (`${baseURL}/movies/allgenre`);
        const data = await res.json();
        dispatch({
            type: GET_MOVIE_FILTER,
            payload: data.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}

