import { combineReducers } from 'redux';
import auth from './auth';
import approve from './approve';

const evokeAdminSite = combineReducers({auth, approve});

export default evokeAdminSite;
