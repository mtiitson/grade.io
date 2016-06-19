import React, { Component, PropTypes } from 'react';
import ResultDashboard from '../components/ResultDashboard/ResultDashboard.jsx';
import {connect} from 'react-redux';
import {fetchGrades} from '../actions/index.js';

const StudentDashboard = connect(
    state => ({
        results: [
            {
                title: "Praktikumid",
                current: state.grades.loaded ? state.grades.loaded[0].labs : 0,
                treshold: 1,
            },
            {
                title: "Prototüüp 1",
                current: state.grades.loaded ? state.grades.loaded[0].prototypes[0] : 0,
                treshold: 15,
                maximum: 30
            },
            {
                title: "Prototüüp 2",
                current: state.grades.loaded ? state.grades.loaded[0].prototypes[1] : 0,
                treshold: 15,
                maximum: 30
            },
            {
                title: "Kontrolltöö",
                current: state.grades.loaded ? state.grades.loaded[0].quiz : 0,
                treshold: 10,
                maximum: 20,
            }
        ]
    }),
    dispatch => ({
        loadResults: () => dispatch(fetchGrades(true))
    }),
)(ResultDashboard);
export default StudentDashboard;