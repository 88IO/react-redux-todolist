import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import tasksReducer from '../reducers/tasks';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: persistReducer({key: 'task', storage: storageSession, whitelist: ['uniqueId', 'tasks']}, tasksReducer),
      router: routerReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  );
}
