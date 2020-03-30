import { FILTER_MOVIE, STORE_SEARCHITEM, DELETE_SEARCHITEM, ADDMOVIETOFAVORITES, DELETEMOVIEFROMFAVORITES } from '../actions/types';

const initialState = {
    items: [],
    querys: [],
    favorites: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FILTER_MOVIE:
            return {
                ...state,
                items: action.payload
            };
        case STORE_SEARCHITEM:
            return {
                ...state,
                querys: action.payload
            };
        case DELETE_SEARCHITEM:
            return {
                ...state,
                querys: action.payload
            };
        case ADDMOVIETOFAVORITES:
            return {
                ...state,
                favorites: action.payload
            };
        case DELETEMOVIEFROMFAVORITES:
            return {
                ...state,
                favorites: action.payload
            };
        default:
            return state;
    }
}
