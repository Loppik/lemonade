import { TYPES } from './actions';
import { HomeEventsActionTypes, HomeEventsState } from './types';

const initialState: HomeEventsState = {
  data: null,
  isLoading: false,
  isError: null
};

const homeEventsReducer = (state = initialState, action: HomeEventsActionTypes): HomeEventsState => {
  switch (action.type) {
    case TYPES.GET_HOME_EVENTS_REQUEST: {
      return {
        data: null,
        isLoading: true,
        isError: null
      };
    }
    case TYPES.GET_HOME_EVENTS_SUCCESS: {
      return {
        data: action.payload.data,
        isLoading: false,
        isError: null
      };
    }
    case TYPES.GET_HOME_EVENTS_FAILURE: {
      return {
        data: null,
        isLoading: false,
        isError: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}

export default homeEventsReducer;
