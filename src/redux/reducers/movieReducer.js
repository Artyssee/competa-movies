import { FILTER_MOVIE } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FILTER_MOVIE:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
