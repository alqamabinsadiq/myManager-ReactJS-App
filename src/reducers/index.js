import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';
import modal from './modal';
import user from './user';
const rootReducer = combineReducers({
  routing: routerReducer,
  modal,
  form,
  notifications
});

export default rootReducer;