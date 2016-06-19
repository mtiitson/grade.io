import React, { Component, PropTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';
import {toDateString} from '../util.js';
import {Modal} from 'react-bootstrap';
import TeacherWorkReport from '../containers/TeacherWorkReport.jsx';

export default class WorksList extends Component {
    static propTypes = {
        works: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            date: PropTypes.string,
            title: PropTypes.string,
            authors: PropTypes.array
        })),
        loadWorks: PropTypes.func.isRequired,
    };
    componentWillMount() {
        this.props.loadWorks();
    }
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            reportEditVisible: false,
            reportEditType: undefined,
            reportEditAuthor: undefined,
            reportEditTitle: undefined,
            reportEditId: undefined,
        }
    }
    render() {
        const {works} = this.props;
        if (!works || !works.length) {
            return (
                <div className="panel panel-default" style={styles.panel}> 
                    <p className="text-center">Tööd puuduvad</p>
                </div>
            )
        }
        const worksTable = works.map((item, i)=> {
            return {...item, key: i, authors: (item.authors || []).join(', ')};
        });
        const workTitleOptions = works.sort().reduce((options, work) => {
            options[work.title] = work.title;
            return options;
        }, {});
        return (
            <div className="panel panel-default">
              <div className="panel-body">
                <Modal show={this.state.reportEditVisible} backdrop="static" onHide={this.handleEditClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.reportEditTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TeacherWorkReport
                            type={this.state.reportEditType}
                            author={this.state.reportEditAuthor}
                            title={this.state.reportEditTitle}
                            id={this.state.reportEditId}
                            onCancel={this.handleEditClose}
                        />
                    </Modal.Body>
                </Modal>
                  <BootstrapTable 
                      data={worksTable} 
                      hover 
                      pagination
                      options={{
                          onRowClick: this.handleRowClick,
                          noDataText: 'Töid ei leitud',
                          clearSearch: true,
                      }} 
                      trClassName="tr-clickable">
                    <TableHeaderColumn dataField="key" isKey hidden></TableHeaderColumn>
                    <TableHeaderColumn dataField="id" hidden></TableHeaderColumn>
                    <TableHeaderColumn dataField="type" hidden></TableHeaderColumn>
                    <TableHeaderColumn dataField="date" filter={{type: "DateFilter"}} dataSort dataFormat={toDateString}>{'Kuupäev'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="title" filter={{type: "SelectFilter", options: workTitleOptions}} dataSort>{'Pealkiri'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="authors" filter={{type: "TextFilter"}} dataSort>{'Autorid'}</TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
        )
    }
    handleRowClick = (row) => {
        this.setState({
            reportEditVisible: true,
            reportEditType: row.type,
            reportEditTitle: row.title,
            reportEditId: row.id,
            reportEditAuthor: row.authors.split(',')[0]
        })
    };
    handleEditClose = () => {
        this.setState({
            reportEditVisible: false,
        })
    };
}


const styles = {
    panel: {
        padding: '2em',
    }
};

