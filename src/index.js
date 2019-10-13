import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import createBrowserHistory from 'history/createBrowserHistory';
import TodoApp from './containers/TodoApp';
import Error from './components/Error';
import createStore from './store';

// History
const history = createBrowserHistory();

// Store
const store = createStore(history);
const persistor = persistStore(store);

// React
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <ConnectedRouter history={history}>
       <div>
         <Route exact path='/' component={TodoApp} />
         <Route path='/error' component={Error} />
       </div>
     </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
