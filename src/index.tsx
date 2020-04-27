import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import boxColorReducer from './reducers/baseColor';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';


const allReducers = combineReducers({
  boxDefaultColor: boxColorReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(
  allReducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  console.log('redux store updated.', store.getState())
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
