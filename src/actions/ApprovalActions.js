import axios from 'axios';
import {
    SAVE_APPROVAL_SUCCESS
} from './types';

export const approveWork = (week, user) => {
    return (dispatch) => {
        console.log(week);
        console.log(user);
        const URL = `https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${week}/users/${user}`;
        axios.get(URL)
            .then(response => {
                dispatch({ type: SAVE_APPROVAL_SUCCESS, payload: response.data });
            }
            ).catch((error) => console.log(error));
    };
};



