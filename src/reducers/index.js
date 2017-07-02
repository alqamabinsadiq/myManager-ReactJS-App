import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as form } from 'redux-form';
import modal from './modal';
const rootReducer = combineReducers({
  routing: routerReducer,
  modal,
  form
});

export default rootReducer;