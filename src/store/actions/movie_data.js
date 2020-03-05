import {GET_MOVIE, ERROR} from "./types";
const baseURL = "https://gamovieapp.herokuapp.com/api";

export const getMovies = () => async dispatch => {
    try {
        const res = await fetch (`${baseURL}/movie`);
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

export const GET_MOVIE_ACTION = (action) => async dispatch => {
    console.log(await fetch (`${baseURL}/movie/?page=1&field=genre&value=${action}`))
    try {
        const res = await fetch (`${baseURL}/movie/?page=1&field=genre&value=${action}`);
        const data = await res.json();
        dispatch({
            type: GET_MOVIE_ACTION,
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

export const GET_MOVIE_DRAMA = () => async dispatch => {
    try {
        const res = await fetch (`${baseURL}/movie/genre=drama`);
        const data = await res.json();
        dispatch({
            type: GET_MOVIE_DRAMA,
            payload: data.data.docs
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}

export const GET_MOVIE_ADVENTURE = () => async dispatch => {
    try {
        const res = await fetch (`${baseURL}/movie/genre=adventure`);
        const data = await res.json();
        dispatch({
            type: GET_MOVIE_ADVENTURE,
            payload: data.data.docs
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ERROR,
            payload: error
        })
    }
}