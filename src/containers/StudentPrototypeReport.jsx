import React, { Component, PropTypes } from 'react';
import WorkReport from '../components/Reports/WorkReport.jsx';
import PrototypeWork from '../models/PrototypeWork.js';
import Grade from '../models/Grade.js';
import Criterion from '../models/Criterion.js';


const work = new PrototypeWork(
    1, 
    new Grade([
        new Criterion('Mulje', 1), 
        new Criterion('Ilu', 2)
    ]),
    ['Jüri Mari', 'Mati Kaal'],
    'Väga hea',
    'http://www.neti.ee'
);


export default class StudentPrototypeReport extends Component {
    render() {
        return (
            <WorkReport work={work} />
        );
    }

}
