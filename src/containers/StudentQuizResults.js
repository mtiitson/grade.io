import React, { Component, PropTypes } from 'react';
import QuizResult from '../entities/QuizResult';
import QuizResults from '../components/QuizResults';
import Grade from '../entities/Grade';

export default class StudentQuizResults extends Component {
    constructor(props) {
        super(props);
        this.results = new QuizResult(
            [
                new Grade('#1', 10),
                new Grade('#2', 10),
                new Grade('#3', 8),
                new Grade('#4', 8),
            ] 
        , new Date(1436879804703), 'Mati Kaal');
    }
    render() {
        return <QuizResults results={this.results} />
    }

}
