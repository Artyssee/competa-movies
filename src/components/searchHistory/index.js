import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = () => {
    const movies = useSelector(state => state.movies);

    return (
        <div>
            <h1>Recently searched</h1>
            {movies}
        </div>
    )
}

export default MovieList;
