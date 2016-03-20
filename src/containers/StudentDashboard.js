import React, { Component, PropTypes } from 'react';
import ResultDashboard from '../components/ResultDashboard';

export default class StudentDashboard extends Component {
    results = [
        {
            title: "Praktikumid",
            current: 1,
            treshold: 1,
        },
        {
            title: "Prototüüp 1",
            current: 14,
            treshold: 15,
            maximum: 30 
        },
        {
            title: "Prototüüp 2",
            current: 0,
            treshold: 15,
            maximum: 30 
        },
        {
            title: "Kontrolltöö",
            current: 20,
            treshold: 10,
            maximum: 20, 
        },
    ]

    render() {
        return (
            <ResultDashboard results={this.results} onSelect={this.handleSelect}/>
        )
    }
    handleSelect = (result) => { //TODO REMOVE
        if (this.props.onSelect) {
            this.props.onSelect(result);
        }       
    }
}
