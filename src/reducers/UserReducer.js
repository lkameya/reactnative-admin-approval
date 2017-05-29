import {
    FETCH_USERS_SUCCESS,
    USER_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    users: [],
    selectedUser: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return { ...state, users: action.payload };

        case USER_UPDATE:
            console.log(action.payload);
            return { ...state, selectedUser: action.payload };

        default:
            return state;
    }
};
