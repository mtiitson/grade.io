import React, { Component, PropTypes } from 'react';
import WorkReport from '../components/Reports/WorkReport.jsx';
import Editable from '../components/Reports/Editable.jsx';
import PrototypeWork from '../models/PrototypeWork.js';
import Grade from '../models/Grade.js';
import Criterion from '../models/Criterion.js';

const work = new PrototypeWork(
    1, 
    new Grade([
        new Criterion('Mulje',), 
        new Criterion('Ilu',)
    ]),
    ['Jüri Mari', 'Mati Kaal'],
);

export default class TeacherPrototypeReport extends Component {
    render() {
        return (
            <Editable>
                <WorkReport work={work} />
            </Editable>
        );
    }

}
