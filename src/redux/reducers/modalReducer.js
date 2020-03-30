import { OPEN_MODAL } from '../actions/types';

const initialState = {
    item: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}
