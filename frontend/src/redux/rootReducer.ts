import { combineReducers } from 'redux'
import homeEventsReducer from '../modules/homeEvents/reducer';

const rootReducer = combineReducers({
  homeEvents: homeEventsReducer
});

export default rootReducer;
