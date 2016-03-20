import React, { Component, PropTypes } from 'react';
import PrototypeResult from '../entities/PrototypeResult';
import PrototypeResults from '../components/PrototypeResults';
import Grade from '../entities/Grade';

export default class StudentPrototypeResults extends Component {
    constructor(props) {
        super(props);
        this.results = new PrototypeResult(1, 
            [
                new Grade('Mulje', 1),
                new Grade('Ilu', 2),
                new Grade('Mugavus', 2),
                new Grade('+/-', undefined),
                new Grade('Hilinemine', 0),
                new Grade('Esitamine', 15)
            ] 
        , new Date(1436879804703), ['Jüri Mari', 'Mati Kaal'], 'Väga hea', 'https://www.ee');
    }
    render() {
        return <PrototypeResults results={this.results} />
    }

}
