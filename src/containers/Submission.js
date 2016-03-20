import React, { Component, PropTypes } from 'react';
import TabbedPane from '../components/TabbedPane';
import Lab from '../components/Submission/Lab';
import Prototype from '../components/Submission/Prototype';

export default class Submission extends Component {
    tabs = [
        {
            title: "Praktikum",
            content: (<Lab />),
        },
        {
            title: "Prototüüp I",
            content: (<Prototype />),
        },
        {
            title: "Prototüüp II",
            content: (<Prototype />),
        }
    ]
    
    render() {
        return <TabbedPane tabs={this.tabs}/>;
    }
}
