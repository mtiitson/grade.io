import {compose, createStore} from 'redux';
import rootReducer from '../reducers/index';
//import persistState from 'redux-localstorage';
//import thunkMiddleware from 'redux-thunk';

const createConfiguredStore = compose(
  //applyMiddleware(thunkMiddleware)
  //, persistState(/*paths, config*/)
)(createStore);

export default function configureStore(initialState) {
  return createConfiguredStore(rootReducer, initialState);
}
