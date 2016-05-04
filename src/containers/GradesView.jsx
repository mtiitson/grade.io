import React, { Component, PropTypes } from 'react';
import StudentsGradesReport from './StudentsGradesReport.jsx';


export default class GradesView extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                  <h2 className="h1">Hinded</h2>
                </div>
                <StudentsGradesReport />
            </div>
        )
    }
}
