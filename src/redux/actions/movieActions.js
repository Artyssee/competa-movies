import { FILTER_MOVIE, STORE_SEARCHITEM, DELETE_SEARCHITEM, ADDMOVIETOFAVORITES, DELETEMOVIEFROMFAVORITES } from './types';

const OMDBkey = 'apikey=4977694a';

export const filterMovie = (postData) => dispatch => {
    fetch('http://www.omdbapi.com/?i=tt3896198&' + OMDBkey + '&s=' + encodeURI(postData))
      .then(res => res.json())
      .then(movie =>
        dispatch({
            type: FILTER_MOVIE,
            payload: movie
        }));
}

export const storeSearchItem = (postData) => dispatch => {
    dispatch({
        type: STORE_SEARCHITEM,
        payload: postData
    });
}

export const deleteSearchItem = (postData, id) => dispatch => {
    dispatch({
        type: DELETE_SEARCHITEM,
        payload: [...postData.filter(searchItem => searchItem.id !== id)]
    });
}

export const addMovieToFavorites = (postData) => dispatch => {
    dispatch({
        type: ADDMOVIETOFAVORITES,
        payload: postData
    });
}

export const deleteMovieFromFavorites = (postData, id) => dispatch => {
    dispatch({
        type: DELETEMOVIEFROMFAVORITES,
        payload: [...postData.filter(movie => movie.imdbID !== id)]
    });
}
