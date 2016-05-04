import React, { Component, PropTypes } from 'react';
import SubmitForm from './StudentSubmitForm.jsx';
import Dashboard from './StudentDashboard.jsx';
import StudentLabSeriesReport from './StudentLabSeriesReport.jsx';
import StudentPrototypeReport from './StudentPrototypeReport.jsx';
import StudentQuizReport from './StudentQuizReport.jsx';
import {Modal} from 'react-bootstrap';

export default class StudentView extends Component {
    detailsViews = [
        {title: "Praktikumid", content: <StudentLabSeriesReport /> },
        {title: "Prototüüp 1", content: <StudentPrototypeReport key={1}/> },
        {title: "Prototüüp 2", content: <StudentPrototypeReport key={2}/> },
        {title: "Kontrolltöö", content: <StudentQuizReport /> },

    ]
    constructor(props) {
        super(props);
        this.state = {
            visibleDetailsView: null,
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
                {this.detailsViews.map((view, i) => {
                    return (
                        <Modal key={i} show={this.state.visibleDetailsView === view} backdrop onHide={this.handleDetailsViewClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{view.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {view.content}
                            </Modal.Body>
                        </Modal>
                    );
                })}
            </div>
        )
    }
    handleDashboardSelect = (result) => {
        this.setState({
            visibleDetailsView: this.detailsViews.find(view => {return view.title === result.title})
        });
    }
    handleDetailsViewClose = () => {
        this.setState({
            visibleDetailsView: null
        });
    }
}
