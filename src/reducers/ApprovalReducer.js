import {
    APPROVE_USER
} from '../actions/types';

const INITIAL_STATE = {
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case APPROVE_USER:
            return { ...state, loading: true };

        default:
            return state;
    }
};

