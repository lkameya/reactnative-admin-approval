import axios from 'axios';
import {
    FETCH_USERS_SUCCESS,
    USER_UPDATE,
    FETCH_USER_WORK
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
    return (dispatch) => {
        dispatch({ type: USER_UPDATE, payload: userId });
        const month = 10;
        const URL = `https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${month}/2017/${userId}`;
        axios.get(URL)
            .then(response => {
                if (response.status === 200) {
                    dispatch({ type: FETCH_USER_WORK, payload: response.data });
                } else {
                    console.log('AOOOOO');
                }
            });
    };
};



