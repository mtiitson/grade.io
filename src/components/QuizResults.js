import React, { Component, PropTypes } from 'react';
import QuizResult from '../entities/QuizResult';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';

export default class PrototypeResults extends Component {
    static propTypes = {
        results: PropTypes.instanceOf(QuizResult),
    }
    render() {
        const {results} = this.props;
        if (!results) {
            return (
                <div className="panel panel-default" style={styles.panel}> 
                    <p className="text-center">Tulemused puuduvad</p>
                </div>
            )
        }
        const resultTable = [
            ...results.grades,
            {
                criterion: "Kokku", 
                points: results.grades.reduce((prev, curr) => {
                    return prev + (curr.points || 0);
                }, 0)
            }
        ]
        return (
            <div className="panel panel-default">
              <div className="panel-body">
                <BootstrapTable data={resultTable} hover>
                    <TableHeaderColumn dataField="criterion" isKey>{'Küsimus'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="points">{'Punktid'}</TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
        )
    }
}

const styles = {
    panel: {
        padding: '2em',
    }
}
