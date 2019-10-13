import { combineReducers } from 'redux';
import auth from './auth';

const evokeAdminSite = combineReducers({auth});

export default evokeAdminSite;
