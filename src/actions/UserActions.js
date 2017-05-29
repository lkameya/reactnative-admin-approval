import axios from 'axios';
import {
    FETCH_USERS_SUCCESS,
    USER_UPDATE
} from './types';

export const fetchAllUsers = () => {
    return (dispatch) => {
        const URL = 'https://timesheet-staging-aurity.herokuapp.com/api/users';
        axios.get(URL)
            .then(response => {
                if (response.status === 200) {
                    dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
                }
            });
    };
};

export const getCurrentUser = (userId) => {
    console.log(userId);
    return {
        type: USER_UPDATE,
        payload: userId
    };
};


export const fetchWorkByUser = () => {
    return (dispatch) => {
        const month = 10;
        const user = 3;
        const URL = `https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${month}/2017/${user}`;
        axios.get(URL)
            .then(response => {
                if (response.status === 200) {
                    dispatch({ type: USER_UPDATE, payload: response.data });
                }
            });
    };
};
