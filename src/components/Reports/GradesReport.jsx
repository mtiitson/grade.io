import React, {PropTypes, Component} from 'react';
import Radium, {Style} from 'radium';
import {Modal} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import TeacherPrototypeReport from '../../containers/TeacherPrototypeReport.jsx';
import TeacherQuizSubmit from '../../containers/TeacherQuizSubmit.jsx';
import StudentLabSeriesReport from '../../containers/StudentLabSeriesReport.jsx';
import $ from 'jquery';

class GradesReport extends Component {
    static propTypes = {
        grades: PropTypes.arrayOf(PropTypes.shape({
            student: PropTypes.string,
            labs: PropTypes.number,
            proto1: PropTypes.number,
            proto2: PropTypes.number,
            quiz: PropTypes.number,
        })),
    };
    constructor(props) {
        super(props);
        this.state = {
            detailsViewVisible: false,
            detailsViewTitle: '',
            detailsView: null,
        }
    }
    render() {
        const {grades} = this.props;
        if (!grades || !grades.length) {
            return (
                <div className="panel panel-default" style={styles.panel}>
                    <p className="text-center">Hinded puuduvad</p>
                </div>
            )
        }
        const gradesTable = grades.map((item, i)=> {
            return Object.assign({}, item, {key: i}, {total: item.labs + item.proto1 + item.proto2 + item.quiz});
        });
        return (
            <div>
                <Modal show={this.state.detailsViewVisible} backdrop="static" onHide={this.handleEditClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.detailsViewTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.detailsView}
                    </Modal.Body>
                </Modal>
                  <BootstrapTable
                      ref={this.handleTableUpdate}
                      data={gradesTable}
                      pagination
                      options={{
                          afterTableComplete: this.handleTableUpdate,
                          noDataText: 'Hindeid ei leitud',
                          clearSearch: true,
                      }}
                      trClassName="tr-clickable">
                    <TableHeaderColumn dataField="student" isKey filter={{type: 'TextFilter'}} dataSort>Õpilane</TableHeaderColumn>
                    <TableHeaderColumn dataField="labs" >{'Praktikumid'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="proto1" >{'Prototüüp 1'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="proto2" >{'Prototüüp 2'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="quiz" >{'Kontrolltöö'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="total" dataSort>{'Kokku'}</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }

    handleTableUpdate = () => {
        $('.tr-clickable td')
            .not($('.tr-clickable')
                .find('td:first'))
            .not($('.tr-clickable')
                .find('td:last'))
            .hover((e) => {
                $(e.target).css('background-color', '#f5f5f5');
            },(e) => {
                $(e.target).css('background-color', 'transparent');
            })
            .off('click.details')
            .on('click.details', (e) => {
                const $this = $(e.target);
                const student = $this
                    .closest('tr')
                    .children(':first')
                    .html();
                const column = $this.prevAll().length;
                const work = $this
                    .closest('.react-bs-table')
                    .find('th')
                    .eq(column)
                    .children('span:first')
                    .html();
                this.handleOpenDetails(student, work);
                    
            });
    }

    handleOpenDetails = (student, work) => {
        switch (work) {
            case "Praktikumid":
                this.setState({
                    detailsView: (<StudentLabSeriesReport />),
                });
                break;
            case "Prototüüp 1":
            case "Prototüüp 2":
                this.setState({
                    detailsView: (<TeacherPrototypeReport />),
                });
                break;
            case "Kontrolltöö":
                this.setState({
                    detailsView: (<TeacherQuizSubmit />),
                });
                break;
        }
        this.setState({
            detailsViewTitle: work,
            detailsViewVisible: true,
        });
    }
    handleEditClose = () => {
        this.setState({
            detailsViewVisible: false,
        })
    }
}
export default Radium(GradesReport);

const styles = {
    panel: {
        padding: '2em',
    }
}

