import { combineReducers } from 'redux';
import ApprovalReducer from './ApprovalReducer';

export default combineReducers({
    approval: ApprovalReducer
});
