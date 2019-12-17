import { combineReducers } from 'redux';
import auth from './auth';
import approve from './approve';
import rewards from './rewards';

const evokeAdminSite = combineReducers({auth, approve, rewards});

export default evokeAdminSite;
