import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSearchItem } from '../../redux/actions/movieActions';


const SearchHistory = () => {

    const content = useSelector(state => state.movies.querys);
    const dispatch = useDispatch();

    const searchItems = content.map(item => {

        const onClick = () => {    
            dispatch(deleteSearchItem(content, item.id))
        }

        return(
            <div key={item.id}>
                <h5>{item.title}</h5>
                <button onClick={onClick}>Delete searchitem</button>
            </div>
        );
    })

    return (
        <div>
            <h1>SearchHistory</h1>
            {searchItems}
        </div>
    )
}

export default SearchHistory;
