import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import { enableBatching } from 'redux-batched-actions';


const router = routerMiddleware(browserHistory);

const middleware = [thunk, router];

const enhancers = compose(
  applyMiddleware(...middleware),
  (window.devToolsExtension && process.env.NODE_ENV !== 'production') ?
    window.devToolsExtension() : f => f
);


export default function configureStore(initialState = {}) {
  const store = createStore(enableBatching(rootReducer), initialState, enhancers);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line
    );
  }

  return store;
}