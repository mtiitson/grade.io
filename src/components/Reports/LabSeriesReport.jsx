import React, { Component, PropTypes } from 'react';
import LabWork from '../../models/LabWork.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';
import {toDateString} from '../../util.js';

export default class LabSeriesReport extends Component {
    static propTypes = {
        labs: PropTypes.arrayOf(PropTypes.instanceOf(LabWork)),
    }
    render() {
        if (!this.props.labs || !this.props.labs.length) {
            return (
                <p className="text-center">Tulemused puuduvad</p>
            )
        }
        const dataSet = this.props.labs.map(result => {
            return {
                title: result.lab.title,
                grade: result.grade.criteria[0].score,
                date: result.grade.date,
                coauthors: result.getCoauthors("Mati Kaal").join(', '),
            };
        });
        return (
            <BootstrapTable data={dataSet} hover>
                <TableHeaderColumn dataField="title" dataSort isKey>{'Pealkiri'}</TableHeaderColumn>
                <TableHeaderColumn dataField="date" dataSort dataFormat={toDateString}>{'Hindamise kp'}</TableHeaderColumn>
                <TableHeaderColumn dataField="grade">{'Punktid'}</TableHeaderColumn>
                <TableHeaderColumn dataField="coauthors" dataSort>{'Kaasautorid'}</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

