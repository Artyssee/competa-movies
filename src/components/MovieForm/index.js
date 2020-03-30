import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterMovie, storeSearchItem } from '../../redux/actions/movieActions';
import { v4 as uuidv4 } from 'uuid';

const MovieForm = () => {
    const [form, setForm] = useState({title: ''});
    const dispatch = useDispatch();

    const storedMovies = useSelector(state => state.movies.querys);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(filterMovie(form.title));
        dispatch(storeSearchItem([{id: uuidv4(), title: form.title}, ...storedMovies]));

        e.target.title.value= '';
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    return (
        <React.Fragment>
            <h1>Search movies</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Film title</label>
                    <input type="text" name="title" onChange={onChange} />
                </div>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </React.Fragment>
    )
}

export default MovieForm;
