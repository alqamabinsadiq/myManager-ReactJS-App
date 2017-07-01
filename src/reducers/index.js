import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import modal from './modal';
const rootReducer = combineReducers({
  routing: routerReducer,
  modal
});

export default rootReducer;