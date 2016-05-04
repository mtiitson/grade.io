import React, { Component, PropTypes } from 'react';
import QuizWork from '../models/QuizWork.js';
import WorkReport from '../components/Reports/WorkReport.jsx';
import Grade from '../models/Grade.js';
import Criterion from '../models/Criterion.js';

const work = new QuizWork(
    new Grade([
        new Criterion('#1', 20), 
        new Criterion('#2', 40)
    ]),
    ['Mati Kaal'],
);
export default class StudentQuizReport extends Component {
    render() {
        return (
            <WorkReport work={work} />
        )

    }

}
