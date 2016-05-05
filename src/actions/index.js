import { createAction, handleAction, handleActions } from 'redux-actions';
import fetch from 'isomorphic-fetch'
export const FETCH_USER = 'FETCH_USER';
export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const CHANGE_INPUT_USERNAME = 'CHANGE_INPUT_USERNAME';
export const CHANGE_INPUT_NAME = 'CHANGE_INPUT_NAME';
export const CREATE_USER = 'CREATE_USER';
export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER';
export const RECEIVE_CREATE_USER = 'RECEIVE_CREATE_USER';
export const CHANGE_AUTH_TAB = 'CHANGE_AUTH_TAB';

export const requestUser = createAction(REQUEST_USER);
export const receiveUser = createAction(RECEIVE_USER, (username, data) => ({username, data}));
export function fetchUser(username, password) {
    return function(dispatch) {
        dispatch(requestUser(username));
        return fetch(`api/users/${username}`)
            .then(response => response.json())
            .then(json => dispatch(receiveUser(username, json)))
            .catch(e => dispatch(receiveUser(new Error(`User ${username} not found`))));
    }
}

export const changeInputUsername = createAction(CHANGE_INPUT_USERNAME);
export const changeInputName = createAction(CHANGE_INPUT_NAME);

export const requestCreateUser = createAction(REQUEST_CREATE_USER);
export const receiveCreateUser = createAction(RECEIVE_CREATE_USER);
export function createUser(username, password, name) {
    return function(dispatch) {
        dispatch(requestCreateUser(username));
        return fetch(`api/users`, {
            method: 'POST',
            body: JSON.stringify({username, password, name})
        })
            .then(response => response.json())
            .catch(e => /*Mocked - always succeed*/ ({}))
            .then(json => dispatch(receiveCreateUser(username)))
            .then(() => dispatch(fetchUser(username, password)));

    }
}

export const changeAuthenticationTab = createAction(CHANGE_AUTH_TAB);
