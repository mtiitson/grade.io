import React, { Component, PropTypes } from 'react';
import QuizWork from '../models/QuizWork.js';
import WorkReport from '../components/Reports/WorkReport.jsx';
import Grade from '../models/Grade.js';
import Criterion from '../models/Criterion.js';
import Editable from '../components/Reports/Editable.jsx';

const work = new QuizWork(
    new Grade([
        new Criterion('#1', null), 
        new Criterion('#2', null),
        new Criterion('#2', null),
        new Criterion('#4', null),
    ]),
);
export default class TeacherQuizSubmit extends Component {
    render() {
        return (
            <Editable>
                <WorkReport work={work} />
            </Editable>

        )

    }

}
