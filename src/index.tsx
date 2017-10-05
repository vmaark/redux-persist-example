import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { persistStore, autoRehydrate } from 'redux-persist';

import './index.css';

const store = createStore<StoreState>(
  enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  },
  compose(
    autoRehydrate(),
    applyMiddleware(),
  )
);

persistStore(store, { blacklist: [] }, () => {
  console.log('rehydration complete');
})

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root')
);
