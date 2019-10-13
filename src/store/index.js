import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import tasksReducer from '../reducers/tasks';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: persistReducer({key: 'task', storage, whitelist: ['uniqueId', 'tasks']}, tasksReducer),
      router: routerReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  );
}
