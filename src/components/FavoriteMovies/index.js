import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovieFromFavorites } from '../../redux/actions/movieActions';

const FavoriteMovies = () => {

    const content = useSelector(state => state.movies.favorites);
    const dispatch = useDispatch();

    const favoriteItems = content.map(favorite => {

        const deleteFavorite = () => {
            dispatch(deleteMovieFromFavorites(content, favorite.imdbID))
        }

        return (
            <div key={favorite.imdbID}>
                <img src={favorite.Poster} alt="" />
                <h4>{favorite.Title}</h4>
                <button onClick={deleteFavorite}>Delete favorite</button>
            </div>
        );
    })

    return (
        <div>
            <h1>Favorites</h1>
            {favoriteItems}
        </div>
    )
}

export default FavoriteMovies;
