import { OPEN_MODAL } from './types';

export const openModal = (postData) => dispatch => {
    dispatch({
        type: OPEN_MODAL,
        payload: postData
    });
}
