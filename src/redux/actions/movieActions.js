import { FILTER_MOVIE } from './types';

export const filterMovie = (postData) => dispatch => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=4977694a&s=' + postData)
      .then(res => res.json())
      .then(movie =>
        dispatch({
            type: FILTER_MOVIE,
            payload: movie
        }));
}
