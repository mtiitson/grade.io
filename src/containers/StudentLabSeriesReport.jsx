import React, { Component, PropTypes } from 'react';
import LabSeriesReport from '../components/Reports/LabSeriesReport.jsx';
import LabWork from '../models/LabWork.js';
import Lab from '../models/Lab.js';
import Grade from '../models/Grade.js';
import Criterion from '../models/Criterion.js';

const lab1 = new Lab(1, 'UI:Prototüüp', 'Prototüüpimine paberil');
const lab2 = new Lab(2, 'UI:Bootstrap', 'Veebilehtede põhjad');
const grade1 = new Grade([new Criterion('Esitatud', 1)]);
const grade2 = new Grade([new Criterion('Esitatud', null)]);
const labwork1 = new LabWork(lab1, grade1, ['Jüri Mari', 'Mati Kaal']);
const labwork2 = new LabWork(lab2, grade2, ['Villu Tatt', 'Mati Kaal']);

export default class StudentLabSeriesReport extends Component {
    render() {
        return (<LabSeriesReport labs={[labwork1, labwork2]} />);
    }
}
