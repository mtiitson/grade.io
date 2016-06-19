import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
//import persistState from 'redux-localstorage';

const createConfiguredStore = compose(
    applyMiddleware(thunkMiddleware),
    //, persistState(/*paths, config*/)
    //window.devToolsExtension ? window.devToolsExtension() : undefined,
)(createStore);

export default function configureStore(initialState) {
    return createConfiguredStore(rootReducer, initialState);
}
