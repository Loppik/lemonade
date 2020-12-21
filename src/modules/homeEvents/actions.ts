import { GetHomeEventsAction } from './types';

export const TYPES = {
  GET_HOME_EVENTS_REQUEST: 'GET_HOME_EVENTS_REQUEST',
  GET_HOME_EVENTS_SUCCESS: 'GET_HOME_EVENTS_SUCCESS',
  GET_HOME_EVENTS_FAILURE: 'GET_HOME_EVENTS_FAILURE',
};

export const getHomeEventsAction = (longitude: number, latitude: number) => <GetHomeEventsAction>({
  type: TYPES.GET_HOME_EVENTS_REQUEST,
  payload: {location: { longitude, latitude }}
})
