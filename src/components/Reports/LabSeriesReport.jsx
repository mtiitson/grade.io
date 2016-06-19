import React, { Component, PropTypes } from 'react';
import LabWork from '../../models/LabWork.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';
import {toDateString} from '../../util.js';

export default class LabSeriesReport extends Component {
    static propTypes = {
        labs: PropTypes.array,
        loadLabs: PropTypes.func.isRequired,
    };
    static defaultProps = {
        labs: [],
    };
    componentWillMount() {
        this.props.loadLabs();
    }
    render() {
        const {labs} = this.props;
        if (!labs.length) {
            return (
                <p className="text-center">Tulemused puuduvad</p>
            )
        }
        const dataSet = labs.map(lab => {
            return {
                title: lab.name,
                grade: lab.grade.criteria[0].score,
                date: new Date(lab.grade.date),
                coauthors: (lab.coauthors || []).join(', '),
            };
        });
        return (
            <BootstrapTable data={dataSet} hover>
                <TableHeaderColumn dataField="title" dataSort isKey>{'Pealkiri'}</TableHeaderColumn>
                <TableHeaderColumn dataField="date" dataSort dataFormat={toDateString}>{'Hindamise kp'}</TableHeaderColumn>
                <TableHeaderColumn width="80" dataField="grade">{'Punktid'}</TableHeaderColumn>
                <TableHeaderColumn dataField="coauthors" dataSort>{'Kaasautorid'}</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

