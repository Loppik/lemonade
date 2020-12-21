import { takeEvery, put } from 'redux-saga/effects'
import { TYPES } from './actions';
import client from '../../redux/apolloClient';
import { GET_HOME_EVENTS_QUERY } from './queries';
import { GetHomeEventsAction } from './types';

function* getHomeEventsSaga(action: GetHomeEventsAction) {
  try {
    const { data } = yield client.query({
      query: GET_HOME_EVENTS_QUERY,
      variables: action.payload.location
    })
    yield put({ type: TYPES.GET_HOME_EVENTS_SUCCESS, payload: {data: data && data.getHomeEvents} })
  } catch (error) {
    console.error(error);
    yield put({ type: TYPES.GET_HOME_EVENTS_FAILURE, payload: {error: error.message} })
  }
}

export function* homeEventsSaga() {
  yield takeEvery(TYPES.GET_HOME_EVENTS_REQUEST, getHomeEventsSaga)
}
