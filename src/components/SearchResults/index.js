import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovieToFavorites } from '../../redux/actions/movieActions';
import { openModal } from '../../redux/actions/modalActions';

const SearchResults = () => {
    const content = useSelector(state => state.movies.items.Search);
    const modal = useSelector(state => state.modals.item);
    const favorites = useSelector(state => state.movies.favorites);

    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const addToFavorite = (item) => {
        dispatch(addMovieToFavorites([item, ...favorites]))
    }

    const openMovieModal = (post) => {
        dispatch(openModal(post))
        setModalOpen(true)
    }

    const currentModal = () => {
        if (modalOpen) {

            return [modal].map(item => {
                return (
                    <div key={item.imdbID + 1}>
                        <h1>Highlight</h1>
                        <img src={item.Poster} alt="" />
                        <h3>Title: {item.Title}</h3>
                        <div>
                            <p>Year: {item.Year}</p>
                            <p>imdbID: {item.imdbID}</p>
                        </div>
                        <button onClick={() => addToFavorite(modal)}>Add to favorite</button>
                    </div>
                );
            })
        }
    }

    const filterMovies = () => {

        if (content) {
            return content.map(post => {

                return (
                    <div key={post.imdbID}>
                        <img src={post.Poster} alt="" />
                        <h3>{post.Title}</h3>
                        <button onClick={() => addToFavorite(post)}>Add to favorite</button>
                        <button onClick={() => openMovieModal(post)}>Vieuw details</button>
                    </div>
                );
            })
        }
    }

    return (
        <div>
            {currentModal()}
            <h1>Search results</h1>
            {filterMovies()}
        </div>
    )
}

export default SearchResults;
