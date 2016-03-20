import React, { Component, PropTypes } from 'react';
import LabResults from '../components/LabResults';
import LabResult from '../entities/LabResult';
import Lab from '../entities/Lab';

const lab1 = new Lab(1, 'UI:Prototüüp', 'Prototüüpimine paberil');
const lab2 = new Lab(2, 'UI:Bootstrap', 'Veebilehtede põhjad');
export default class StudentLabResults extends Component {
    constructor(props) {
        super(props);
        this.results = [];
        this.results.push(new LabResult(lab1, 1, new Date(1436879804703), ['Jüri Mari', 'Mati Kaal']));
        this.results.push(new LabResult(lab2, undefined, undefined, ['Villu Tatt', 'Riho Rünno Rein Kasepatspidur', 'Mati Kaal']));
    }
    render() {
        return (<LabResults results={this.results} />);
    }
}
