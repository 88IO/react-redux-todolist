import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tasksReducer from '../reducers/tasks';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: persistReducer({key: 'task', storage: storage, whitelist: ['task'], blacklist: []}, tasksReducer),
      router: routerReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  );
}
