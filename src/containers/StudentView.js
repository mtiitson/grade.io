import React, { Component, PropTypes } from 'react';
import SubmitForm from './StudentSubmitForm';
import Dashboard from './StudentDashboard';
import LabResults from './StudentLabResults';
import PrototypeResults from './StudentPrototypeResults';
import QuizResults from './StudentQuizResults';

export default class StudentView extends Component {
    resultMap = {
        "Praktikumid": <LabResults />,
        "Prototüüp 1": <PrototypeResults key={1} />,
        "Prototüüp 2": <PrototypeResults key={2} />,
        "Kontrolltöö": <QuizResults />,
    }
    constructor(props) {
        super(props);
        this.state = {
            visibleResults: null,
        };
    }
    render() {
        return (
            <div>
                <div className="page-header">
                  <h2 className="h1">Esitamine</h2>
                </div>
                <SubmitForm />
                <div className="page-header">
                  <h2 className="h1">Tulemused</h2>
                </div>
                <Dashboard onSelect={this.handleDashboardSelect}/> 
                {(() => {
                    if (this.state.visibleResults) {
                        return (
                            <div className="well" style={styles.visibleResults}>
                                <h2 className="h2">{this.state.visibleResults}
                                <span className="pull-right"><i onClick={this.handleDashboardSelect.bind(this, this.state.visibleResults)} className="fa fa-times"></i></span>
                                </h2>
                                {this.resultMap[this.state.visibleResults]}
                            </div>
                        )
                    }
                })()}
            </div>
        )
    }
    handleDashboardSelect = (result) => {
        if (result.title === this.state.visibleResults) {
            this.setState({
                visibleResults: null
            });
        } else {
            this.setState({
                visibleResults: result.title
            });
        }
    }
}
const styles = {
    visibleResults: {
        margin: '2em',
    }
}
