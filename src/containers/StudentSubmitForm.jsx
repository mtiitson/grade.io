import React, { Component, PropTypes } from 'react';
import TabbedPane from '../components/TabbedPane/TabbedPane.jsx';
import Lab from '../components/SubmitForm/Lab.jsx';
import Prototype from '../components/SubmitForm/Prototype.jsx';

export default class StudentSubmitForm extends Component {
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
            label: {
                text: "Suletud",
                type: "default",
            },
            content: (<Prototype 
                      closed
                      key={1}/>),
        }
    ]
    
    render() {
        return <TabbedPane tabs={this.tabs}/>;
    }
}
