import React, { Component, PropTypes } from 'react';
import PrototypeResult from '../entities/PrototypeResult';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';
import Coauthor from './SubmitForm/Coauthor';

export default class PrototypeResults extends Component {
    static propTypes = {
        results: PropTypes.instanceOf(PrototypeResult),
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
                <form className="form-horizontal">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label>Esitatud töö</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-link"></i></span>
                                <input readOnly className="form-control" placeholder="Aadress" type="text" value={results.submission}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Kaasautorid</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-users"></i></span>
                                <input type="text" className="form-control" readOnly value={results.getCoauthors('Mati Kaal')} />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-7">
                        <BootstrapTable data={resultTable} hover>
                            <TableHeaderColumn dataField="criterion" isKey>{'Kriteerium'}</TableHeaderColumn>
                            <TableHeaderColumn dataField="points">{'Punktid'}</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                    <div className="col-md-5">
                        <label>Kommentaar</label>
                        <textarea className="form-control" readOnly value={results.comment}/>
                    </div>
                </div>
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
