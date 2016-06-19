import * as actions from '../actions/index';

export function students(state = {loading: false, loaded: []}, action) {
    switch (action.type) {
        case actions.REQUEST_STUDENTS:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.RECEIVE_STUDENTS:
            return Object.assign({}, state, {
                loading: false,
                loaded: action.error ? [] : action.payload
            });
        default:
            return state;
    }
}

export function user(state = {}, action) {
    switch (action.type) {
        case actions.REQUEST_USER:
            return Object.assign({}, state, {
                loading: action.payload
            });
        case actions.RECEIVE_USER:
            return Object.assign({}, state, {
                loading: null,
                loaded: action.error ? null : action.payload,
            });
        case actions.REQUEST_CREATE_USER:
            return Object.assign({}, state, {
                saving: action.payload,
            });
        case actions.RECEIVE_CREATE_USER:
            return Object.assign({}, state, {
                saving: null,
                saved: action.error ? null : action.payload,
            });
        case actions.DISCARD_USER:
            return Object.assign({}, state, {
                saved: null,
                loaded: null,
            });
        default:
            return state;
    }
}

export function labNames(state = {}, action) {
    switch (action.type) {
        case actions.REQUEST_LAB_NAMES:
            return {...state,
                loading: true,
            };
        case actions.RECEIVE_LAB_NAMES:
            return {...state,
                loading: false,
                loaded: !action.error && action.payload
            };
        default:
            return state;
    }
}

export function labs(state = {}, action) {
    switch (action.type) {
        case actions.REQUEST_LABS:
            return Object.assign({}, state, {
                loading: action.payload || true,
            });
        case actions.RECEIVE_LABS:
            return Object.assign({}, state, {
                loading: false,
                loaded: !action.error ? action.payload : null,
            });
        case actions.REQUEST_CREATE_LAB:
            return Object.assign({}, state, {
                saving: true,
            });
        case actions.RECEIVE_CREATE_LAB:
            return Object.assign({}, state, {
                saved: action.payload,
                saving: false,
            });
        default:
            return state;
    }
}

export function grades(state = {loaded: false}, action) {
    switch (action.type) {
        case actions.REQUEST_GRADES:
            return Object.assign({}, state, {
                loading: true,
                loaded: false,
            });
        case actions.RECEIVE_GRADES:
            return Object.assign({}, state, {
                loading: false,
                loaded: !action.error ? action.payload : null,
            });
        default:
            return state;
    }
}

export function quiz(state = {loaded: false}, action) {
    switch (action.type) {
        case actions.REQUEST_QUIZ:
            return {...state,
                loading: action.payload || true,
            };
        case actions.RECEIVE_QUIZ:
            return {...state,
                loading: false,
                loaded: !action.error ? action.payload : null,
            };
        default:
            return state;
    }
}

export function works(state = {loaded: false}, action) {
    switch (action.type) {
        case actions.REQUEST_WORKS:
            return {...state,
                loading: true,
            };
        case actions.RECEIVE_WORKS:
            return {...state,
                loading: false,
                loaded: !action.error ? action.payload : null,
            };
        default:
            return state;
    }
}

export function authenticationBlock(state = {activeTab: "LOG_IN"}, action) {
    switch (action.type) {
        case actions.CHANGE_INPUT_USERNAME:
            return Object.assign({}, state, {
                username: action.payload,
            });
        case actions.CHANGE_INPUT_NAME:
            return Object.assign({}, state, {
                name: action.payload,
            });
        case actions.CHANGE_AUTH_TAB:
            return Object.assign({}, state, {
                activeTab: action.payload,
            });
        default:
            return state;
    }

};

export function prototypes(state = {}, action) {
    switch (action.type) {
        case actions.REQUEST_CREATE_PROTOTYPE:
            return Object.assign({}, state, {
                saving: true,
            });
        case actions.RECEIVE_CREATE_PROTOTYPE:
            return Object.assign({}, state, {
                saved: action.payload,
                saving: false,
            });
        case actions.REQUEST_PROTOTYPES:
            return Object.assign({}, state, {
                loading: action.payload || true,
            });
        case actions.RECEIVE_PROTOTYPES:
            return Object.assign({}, state, {
                loading: false,
                loaded: action.error ? null : action.payload,
            });
        default:
            return state;
    }
}

export function submitBlock(state = {activeTab: "LAB"}, action) {
    switch (action.type) {
        case actions.CHANGE_SUBMIT_TAB:
            return Object.assign({}, state, {
                activeTab: action.payload
            });
        case actions.CHANGE_INPUT_COAUTHORS:
            return Object.assign({}, state, {
                coauthors: action.payload
            });
        case actions.CHANGE_INPUT_SUBMISSION:
            return Object.assign({}, state, {
                submission: action.payload
            });
        case actions.CHANGE_INPUT_LAB_ID:
            return Object.assign({}, state, {
                labId: action.payload
            });
        case actions.RECEIVE_CREATE_PROTOTYPE:
        case actions.RECEIVE_CREATE_LAB:
            return {...state, coauthors: null, submission: '', labId: ''};
        default:
            return state;
    }
}

export function worksBlock(state = {activeTab: "UNGRADED"}, action) {
    switch (action.type) {
        case actions.CHANGE_WORKS_TAB:
            return {...state, activeTab: action.payload};
        default:
            return state;
    }
}