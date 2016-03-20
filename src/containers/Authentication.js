import React, { Component, PropTypes } from 'react';
import TabbedPane from '../components/TabbedPane';
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';

export default class Authentication extends Component {
    tabs = [
        {
            title: "Logi sisse",
            content: (<Login />),
        },
        {
            title: "Registreeri",
            content: (<Register />),
        }
    ]
    
    render() {
        return <TabbedPane tabs={this.tabs}/>;
    }
}
