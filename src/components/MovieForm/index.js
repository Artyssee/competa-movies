import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterMovie } from '../../redux/actions/movieActions'; 

const MovieForm = () => {
    const [form, setForm] = useState({title: ''});
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(filterMovie(form.title));
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Film title </label>
                <input type="text" name="title" onChange={onChange} />
            </div>
            <br />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default MovieForm;
