import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
import Navigation from '../components/Navigation.jsx';
import {discardUser} from '../actions/index.js';

const GradeIONavigation = connect(
    state => ({
        loggedInUser: state.user.loaded ? state.user.loaded.person.name : null,
        isTeacher: state.user.loaded && state.user.loaded.roles && state.user.loaded.roles.indexOf('teacher') > -1,
        isStudent: state.user.loaded && state.user.loaded.roles && state.user.loaded.roles.indexOf('student') > -1,
    }),
    dispatch => ({
        onLogOut: () => {
            dispatch(discardUser());
            hashHistory.push('/');
        }
    }),
)(Navigation);
export default GradeIONavigation;
