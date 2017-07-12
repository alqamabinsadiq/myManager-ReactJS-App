import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';
import modal from './modal';
import user from './user';
import notes from './notes';
const rootReducer = combineReducers({
  routing: routerReducer,
  modal,
  form,
  notifications,
  user,
  notes
});

export default rootReducer;