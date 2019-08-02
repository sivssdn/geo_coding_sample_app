import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, compose, combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/user_reducer';

const allReducers = combineReducers({
    storeName: userReducer
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk)
);

let store = createStore(allReducers,
  {
      storeName: ''
  },
  allStoreEnhancers
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
