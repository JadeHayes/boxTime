import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import counterReducer from './reducers/counterReducer';
import './index.css';
import { App } from './App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const allReducers = combineReducers({
  boxCount: counterReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

let middleware = applyMiddleware(thunk)
if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  middleware = compose(middleware, (window as any).__REDUX_DEVTOOLS_EXTENSION__())
}

export const store = createStore(allReducers, middleware)

store.subscribe(() => {
  console.log('redux store updated.', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
