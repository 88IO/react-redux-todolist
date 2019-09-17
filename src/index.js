import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

// Store
const store = createStore(tasksReducer);

// React
render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
