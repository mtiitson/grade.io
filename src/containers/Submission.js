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
            content: (<Prototype key={0}/>),
        },
        {
            title: "Prototüüp II",
            content: (<Prototype key={1}/>),
        }
    ]
    
    render() {
        return <TabbedPane tabs={this.tabs}/>;
    }
}
