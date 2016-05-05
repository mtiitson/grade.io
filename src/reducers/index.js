import { combineReducers } from 'redux';
import { REQUEST_USER,
	RECEIVE_USER,
	REQUEST_CREATE_USER,
	RECEIVE_CREATE_USER,
	CHANGE_INPUT_USERNAME,
	CHANGE_INPUT_NAME,
	CHANGE_AUTH_TAB
} from '../actions/index';

function user(state = {}, action) {
	switch (action.type) {
		case REQUEST_USER:
			return Object.assign({}, state, {
				loading: action.payload
			});
		case RECEIVE_USER:
			return Object.assign({}, state, {
				loading: null,
				loaded: action.error ? null : action.payload,
			});
		case REQUEST_CREATE_USER:
			return Object.assign({}, state, {
				saving: action.payload,
			});
		case RECEIVE_CREATE_USER:
			return Object.assign({}, state, {
				saving: null,
				saved: action.error ? null: action.payload,
			});
		default:
			return state;
	}
}

function authenticationBlock(state = {activeTab: "LOG_IN"}, action) {
	switch (action.type) {
		case CHANGE_INPUT_USERNAME:
			return Object.assign({}, state, {
                username: action.payload,
            });
		case CHANGE_INPUT_NAME:
			return Object.assign({}, state, {
				name: action.payload,
			});
		case CHANGE_AUTH_TAB:
			return Object.assign({}, state, {
				activeTab: action.payload,
			});
		default:
			return state;
	}

};

const rootReducer = combineReducers({
	user,
	authenticationBlock,
});

export default rootReducer;
