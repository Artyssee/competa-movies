import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSearchItem } from '../../redux/actions/movieActions';


const SearchHistory = () => {

    const content = useSelector(state => state.movies.querys);
    const dispatch = useDispatch();

    const onDeleteItem = (content, id) => {    
        dispatch(deleteSearchItem(content, id))
    }

    const searchItems = content.map(item => {
        return(
            <div key={item.id}>
                <h5>{item.title}</h5>
                <button onClick={() => onDeleteItem(content, item.id)}>Delete searchitem</button>
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
