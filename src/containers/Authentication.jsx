import React, { Component, PropTypes } from 'react';
import TabbedPane from '../components/TabbedPane/TabbedPane.jsx';
import Login from '../components/Authentication/Login.jsx';
import Register from '../components/Authentication/Register.jsx';

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
        return (
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <TabbedPane tabs={this.tabs}/>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        )
        
    }
}
