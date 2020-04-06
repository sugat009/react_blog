import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import blogReducer from '../reducers/blogs';
import authReducer from '../reducers/auth';
import filterReducer from '../reducers/filters';

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      auth: authReducer,
      blogs: blogReducer,
      filters: filterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
