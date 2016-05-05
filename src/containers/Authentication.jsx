import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Authentication from '../components/Authentication/Authentication.jsx';
import Login from '../components/Authentication/Login.jsx';
import Register from '../components/Authentication/Register.jsx';
import {fetchUser, changeInputUsername, changeInputName, createUser, changeAuthenticationTab} from '../actions/index.js';

const AuthenticationLogin = connect(
    state => ({
        username: state.authenticationBlock.username,
    }),
    dispatch => ({
        onLogIn: (username, password) => {
            dispatch(fetchUser(username, password))
        },
        onUsernameChange: username => {
            dispatch(changeInputUsername(username))
        }
    })
)(Login);

const AuthenticationRegister = connect(
    state => ({
        username: state.authenticationBlock.username,
        name: state.authenticationBlock.name,
    }),
    dispatch => ({
        onUsernameChange: username => {
            dispatch(changeInputUsername(username))
        },
        onNameChange: name => {
            dispatch(changeInputName(name))
        },
        onRegister: (...args) => {
            dispatch(createUser(...args))
        }
    })
)(Register);

const tabs = [
    {
        title: "Logi sisse",
        id: "LOG_IN",
        content: (<AuthenticationLogin />),
    },
    {
        title: "Registreeri",
        id: "REGISTER",
        content: (<AuthenticationRegister />),
    }
];

const GradeIOAuthentication = connect(
    state => ({
        tabs,
        selectedTab: state.authenticationBlock.activeTab,
    }),
    dispatch => ({
        onTabSelection: tab => {
            dispatch(changeAuthenticationTab(tab));
        }
    })
)(Authentication);
export default GradeIOAuthentication;
