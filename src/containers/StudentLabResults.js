import React, { Component, PropTypes } from 'react';
import LabResults from '../components/LabResults';
import LabResult from '../entities/LabResult';
import Lab from '../entities/Lab';

const lab1 = new Lab(1, 'UI:Prototüüp', 'Prototüüpimine paberil', new Date());
const lab2 = new Lab(2, 'UI:Bootstrap', 'Veebilehtede põhjad', new Date());
export default class StudentLabResults extends Component {
    constructor(props) {
        super(props);
        this.results = [];
        this.results.push(new LabResult(lab1, 1, undefined, ['Jüri Mari', 'Mati Kaal']));
        this.results.push(new LabResult(lab2, undefined, undefined, ['Villu Tatt', 'Mati Kaal']));
    }
    render() {
        return (<LabResults results={this.results} />);
    }
}
