import React, { Component, PropTypes } from 'react';
import LabResult from '../entities/LabResult';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';

export default class LabResults extends Component {
    static propTypes = {
        results: PropTypes.arrayOf(PropTypes.instanceOf(LabResult)),
    }
    render() {
        if (!this.props.results || !this.props.results.length) {
            return (
                <div className="panel panel-default"  style={styles.panel}> 
                    <p className="text-center">Tulemused puuduvad</p>
                </div>
            )
        }
        const resultTable = this.props.results.map(result => {
            return {
                title: result.lab.title,
                grade: result.grade,
                date: result.date,
                coauthors: result.getCoauthors("Mati Kaal").join(', '),
            };
        });
        return (
            <div className="panel panel-default">
              <div className="panel-body">
                <BootstrapTable data={resultTable} hover>
                    <TableHeaderColumn dataField="title" dataSort isKey>{'Pealkiri'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="date" dataSort dataFormat={toLocalDate}>{'Kuupäev'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="grade">{'Punktid'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="coauthors" dataSort>{'Kaasautorid'}</TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
        );
    }
}

const styles = {
    panel: {
        padding: '2em',
    }
}

function toLocalDate(date) {
    return date.toLocaleDateString();
}
