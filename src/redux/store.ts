import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

declare global {
  interface Window {
    devToolsExtension?: any
  }
}

const sagaMiddleware = createSagaMiddleware()

const create = window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore;

const enhancers = [
  applyMiddleware(sagaMiddleware)
];

const createStoreWithMiddleware = compose(...enhancers)(create);

// @ts-ignore
const store = createStoreWithMiddleware(rootReducer);
sagaMiddleware.run(rootSaga)

export default store;
