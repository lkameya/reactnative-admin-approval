import {
    APPROVE_USER
} from './types';

export const emailChanged = () => {

};


export const approveUser = (text) => {
    return {
        type: APPROVE_USER,
        payload: text
    };
};

