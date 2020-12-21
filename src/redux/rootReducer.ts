import { combineReducers } from 'redux'
import homeEventsReducer from '../modules/homeEvents/reducer';
import client from './apolloClient';

const rootReducer = combineReducers({
  homeEvents: homeEventsReducer
});

export default rootReducer;
