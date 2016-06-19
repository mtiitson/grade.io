import { createAction, handleAction, handleActions } from 'redux-actions';
import fetch from 'isomorphic-fetch'
import {hashHistory} from 'react-router';
export const FETCH_USER = 'FETCH_USER';
export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const CHANGE_INPUT_USERNAME = 'CHANGE_INPUT_USERNAME';
export const CHANGE_INPUT_NAME = 'CHANGE_INPUT_NAME';
export const CREATE_USER = 'CREATE_USER';
export const DISCARD_USER = 'DISCARD_USER';
export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER';
export const RECEIVE_CREATE_USER = 'RECEIVE_CREATE_USER';
export const CHANGE_AUTH_TAB = 'CHANGE_AUTH_TAB';
export const CHANGE_SUBMIT_TAB = 'CHANGE_SUBMIT_TAB';
export const CHANGE_WORKS_TAB = 'CHANGE_WORKS_TAB';
export const CHANGE_INPUT_LAB_ID = 'CHANGE_INPUT_LAB_ID';
export const CHANGE_INPUT_COAUTHORS = 'CHANGE_INPUT_COAUTHORS';
export const CHANGE_INPUT_SUBMISSION = 'CHANGE_INPUT_SUBMISSION';
export const REQUEST_CREATE_LAB = 'REQUEST_CREATE_LAB';
export const RECEIVE_CREATE_LAB = 'RECEIVE_CREATE_LAB';
export const REQUEST_CREATE_PROTOTYPE = 'REQUEST_CREATE_PROTOTYPE';
export const RECEIVE_CREATE_PROTOTYPE = 'RECEIVE_CREATE_PROTOTYPE';
export const REQUEST_STUDENTS = 'REQUEST_STUDENTS';
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const REQUEST_LABS = 'REQUEST_LABS';
export const RECEIVE_LABS = 'RECEIVE_LABS';
export const REQUEST_LAB_NAMES = 'REQUEST_LAB_NAMES';
export const RECEIVE_LAB_NAMES = 'RECEIVE_LAB_NAMES';
export const REQUEST_GRADES = 'REQUEST_GRADES';
export const RECEIVE_GRADES = 'RECEIVE_GRADES';
export const REQUEST_PROTOTYPES = 'REQUEST_PROTOTYPES';
export const RECEIVE_PROTOTYPES = 'RECEIVE_PROTOTYPES';
export const REQUEST_QUIZ = 'REQUEST_QUIZ';
export const RECEIVE_QUIZ = 'RECEIVE_QUIZ';
export const REQUEST_CREATE_QUIZ = 'REQUEST_CREATE_QUIZ';
export const RECEIVE_CREATE_QUIZ = 'RECEIVE_CREATE_QUIZ';
export const REQUEST_UPDATE_QUIZ = 'REQUEST_UPDATE_QUIZ';
export const RECEIVE_UPDATE_QUIZ = 'RECEIVE_UPDATE_QUIZ';
export const REQUEST_WORKS = 'REQUEST_WORKS';
export const RECEIVE_WORKS = 'RECEIVE_WORKS';
export const REQUEST_UPDATE_LAB = 'REQUEST_UPDATE_LAB';
export const RECEIVE_UPDATE_LAB = 'RECEIVE_UPDATE_LAB';
export const REQUEST_UPDATE_PROTOTYPE = 'REQUEST_UPDATE_PROTOTYPE';
export const RECEIVE_UPDATE_PROTOTYPE = 'RECEIVE_UPDATE_PROTOTYPE';

export const requestUser = createAction(REQUEST_USER);
export const receiveUser = createAction(RECEIVE_USER);
export function fetchUser(username, password) {
    return function(dispatch) {
        dispatch(requestUser(username));
        console.log(`Fetching api/users/${username}`);
        return fetch(`api/users/${username}`)
            .then(response => {
                console.log("Received response, status", response.status);
                return response.json();
            })
            .then(json => {console.log(json); return dispatch(receiveUser(json))})
            .catch(e => {console.log(e); return dispatch(receiveUser(new Error(`User ${username} not found`)))})
            .then(() => {hashHistory.push('/home')})
    }
}

export const changeInputUsername = createAction(CHANGE_INPUT_USERNAME);
export const changeInputName = createAction(CHANGE_INPUT_NAME);

export const requestCreateUser = createAction(REQUEST_CREATE_USER);
export const receiveCreateUser = createAction(RECEIVE_CREATE_USER, (username, data) => ({username, data}));
export function createUser(username, password, name) {
    return function(dispatch) {
        dispatch(requestCreateUser(username));
        return fetch(`api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password, person: {name, type: 'student'}})
        })
            .then(response => response.json())
            .catch(e => {console.log(e); return dispatch(receiveCreateUser(new Error()))})
            .then(json => dispatch(receiveCreateUser(username, json)))
            .then(() => dispatch(fetchUser(username, password)));

    }
}
export const discardUser = createAction(DISCARD_USER);


export const changeInputLabId = createAction(CHANGE_INPUT_LAB_ID);
export const changeInputSubmission = createAction(CHANGE_INPUT_SUBMISSION);
export const changeInputCoauthors = createAction(CHANGE_INPUT_COAUTHORS);

export const requestUpdateLab = createAction(REQUEST_UPDATE_LAB);
export const receiveUpdateLab = createAction(RECEIVE_UPDATE_LAB);
export function updateLab(name, lab) {
    return dispatch => {
        dispatch(requestUpdateLab(name));
        return fetch(`api/student/${name}/lab/${lab.id}`, {
            method: 'PUT',
            body: JSON.stringify(lab)
        })
            .then(response => response.json())
            .catch(e => {console.log(e); return dispatch(receiveUpdateLab(new Error()))})
            .then(json => dispatch(receiveUpdateLab(json)));
    }
}

export const requestUpdatePrototype = createAction(REQUEST_UPDATE_PROTOTYPE);
export const receiveUpdatePrototype = createAction(RECEIVE_UPDATE_PROTOTYPE);
export function updatePrototype(name, prototype) {
    return dispatch => {
        dispatch(requestUpdatePrototype(name));
        return fetch(`api/student/${name}/prototype/${prototype.id}`, {
            method: 'PUT',
            body: JSON.stringify(prototype)
        })
            .then(response => response.json())
            .catch(e => {console.log(e); return dispatch(receiveUpdatePrototype(new Error()))})
            .then(json => dispatch(receiveUpdatePrototype(json)));
    }
}


export const requestCreateLab = createAction(REQUEST_CREATE_LAB);
export const receiveCreateLab = createAction(RECEIVE_CREATE_LAB);
export function createLab(lab) {
    return (dispatch, getState) => {
        dispatch(requestCreateLab());
        if (!getState().user.loaded) {
            return dispatch(receiveCreateLab(new Error()));
        }
        //lab.authors = (lab.coauthors || []).concat(getState().user.loaded.person.name);
        lab.type="lab";
        return fetch(`api/labs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...lab, /*authors: (lab.coauthors || []).concat(getState().user.loaded.person.name)*/})
        })
            .then(response => response.json())
            .catch(e => {console.log(e); return dispatch(receiveCreateLab(new Error()))})
            .then(json => dispatch(receiveCreateLab(json)));
    }
}
export const requestCreatePrototype = createAction(REQUEST_CREATE_PROTOTYPE);
export const receiveCreatePrototype = createAction(RECEIVE_CREATE_PROTOTYPE);
export function createPrototype(prototype) {
    return (dispatch, getState) => {
        dispatch(requestCreatePrototype());
        if (!getState().user.loaded) {
            return dispatch(receiveCreateLab(new Error()));
        }
        return fetch(`api/student/${getState().user.loaded.name}/prototypes`, {
            method: 'POST',
            body: JSON.stringify(prototype)
        })
            .then(response => response.json())
            .catch(e => {console.log(e); return dispatch(receiveCreatePrototype(new Error()))})
            .then(json => dispatch(receiveCreatePrototype(json)));
    }
}

export const requestStudents = createAction(REQUEST_STUDENTS);
export const receiveStudents = createAction(RECEIVE_STUDENTS);
export function fetchStudents() {
    return function(dispatch) {
        dispatch(requestStudents());
        return fetch(`api/students`)
            .then(response => response.json())
            .then(json => dispatch(receiveStudents(json._embedded.students)))
            .catch(e => dispatch(receiveStudents(new Error())));
    }
}
export const requestLabNames = createAction(REQUEST_LAB_NAMES);
export const receiveLabNames = createAction(RECEIVE_LAB_NAMES);
export function fetchLabNames() {
    return dispatch => {
        dispatch(requestLabNames());
        return fetch(`api/labNames`)
            .then(response => response.json())
            .then(json => dispatch(receiveLabNames(json)))
            .catch(e => dispatch(receiveLabNames(new Error())));
    }
}
export const requestLabs = createAction(REQUEST_LABS);
export const receiveLabs = createAction(RECEIVE_LABS);
export function fetchLabs(student, labId = '') {
    return (dispatch, getState) => {
        let name = student;
        if (!name) {
            name = getState().user.loaded ? getState().user.loaded.person.name : '';
        }
        dispatch(requestLabs(name));
        return fetch(`api/students/${name}/labs/${labId}?projection=inline`)
            .then(response => response.json())
            .catch(e => {console.error(e);return dispatch(receiveLabs(new Error(e)))})
            .then(json => dispatch(receiveLabs(labId ? json : json._embedded.labs)));
    }
}

export const requestGrades = createAction(REQUEST_GRADES);
export const receiveGrades = createAction(RECEIVE_GRADES);
export function fetchGrades(student) {
    return (dispatch, getState) => {
        let name = student;
        if (name === true) {
            name = getState().user.loaded ? getState().user.loaded.person.name : '';
        } else if (!name) {
            name = ''
        }
        dispatch(requestGrades(name));
        return fetch(`api/grades?name=${name}`)
            .then(response => response.json())
            .then(json => dispatch(receiveGrades(json)))
            .catch(e => {console.error(e);return dispatch(receiveGrades(new Error(e)))});
    }
}

export const requestPrototypes = createAction(REQUEST_PROTOTYPES);
export const receivePrototypes = createAction(RECEIVE_PROTOTYPES);
export function fetchPrototypes(student) {
    return (dispatch, getState) => {
        let name = student;
        if (!name) {
            name = getState().user.loaded ? getState().user.loaded.person.name : '';
        }
        dispatch(requestPrototypes(name));
        return fetch(`api/student/${name}/prototypes`)
            .then(response => response.json())
            .then(json => dispatch(receivePrototypes(json)))
            .catch(e => {console.error(e);return dispatch(receivePrototypes(new Error(e)))});
    };
}

export const requestQuiz = createAction(REQUEST_QUIZ);
export const receiveQuiz = createAction(RECEIVE_QUIZ);
export function fetchQuiz(student) {
    return (dispatch, getState) => {
        let name = student;
        if (!name) {
            name = getState().user.loaded ? getState().user.loaded.name : '';
        }
        dispatch(requestQuiz(name));
        return fetch(`api/student/${name}/quiz`)
            .then(response => response.json())
            .then(json => dispatch(receiveQuiz(json)))
            .catch(e => {console.error(e);return dispatch(receiveQuiz(new Error(e)))});
    };
}

export const requestUpdateQuiz = createAction(REQUEST_UPDATE_QUIZ);
export const receiveUpdateQuiz = createAction(RECEIVE_UPDATE_QUIZ);
export function updateQuiz(name, quiz) {
    return dispatch => {
        dispatch(requestUpdateQuiz(name));
        return fetch(`api/student/${name}/quiz/0`, {
            method: 'PUT',
            body: JSON.stringify(quiz)
        })
            .then(response => response.json())
            .catch(e => {console.error(e);return dispatch(receiveUpdateQuiz(new Error(e)))})
            .then(json => dispatch(receiveUpdateQuiz(json)));
    };
}

export const requestWorks = createAction(REQUEST_WORKS);
export const receiveWorks = createAction(RECEIVE_WORKS);
export function fetchWorks() {
    return dispatch => {
        dispatch(requestWorks());
        return fetch("api/works?projection=inline")
            .then(response => response.json())
            .catch(e => {console.error("Received error", e);return dispatch(receiveWorks(new Error(e)))})
            .then(json => dispatch(receiveWorks(json)));
    }
}

export const changeAuthenticationTab = createAction(CHANGE_AUTH_TAB);
export const changeSubmitTab = createAction(CHANGE_SUBMIT_TAB);
export const changeWorksTab = createAction(CHANGE_WORKS_TAB);

