import {
    FETCH_USERS_SUCCESS,
    USER_UPDATE,
    FETCH_USER_WORK
} from '../actions/types';

const INITIAL_STATE = {
    users: [],
    selectedUser: null,
    works: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return { ...state, users: action.payload };

        case USER_UPDATE:
            return { ...state, selectedUser: action.payload };

        case FETCH_USER_WORK:
            return { ...state, works: action.payload };

        default:
            return state;
    }
};
