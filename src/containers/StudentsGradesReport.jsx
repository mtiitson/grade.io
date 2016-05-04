import React, { Component, PropTypes } from 'react';
import GradesReport from '../components/Reports/GradesReport.jsx';

const grades = [
    {
        student: 'Jüri Türilt',
        labs: 2,
        proto1: 15,
        proto2: 0,
        quiz: 0,
    },
    {
        student: 'Riho Küüslauk',
        labs: 8,
        proto1: 5,
        proto2: 0,
        quiz: 0,
    },
    {
        student: 'Tiina Trollibuss',
        labs: 2,
        proto1: 15,
        proto2: 12,
        quiz: 0,
    },
]


export default class StudentsGradesReport extends Component {
    render() {
        return (
            <GradesReport grades={grades} />
        )
    }
}
