import React, { Component, PropTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';
import StudentsSelection from '../SubmitForm/StudentsSelection.jsx';
import {defaultFunction} from '../../util.js';

export default class WorkReport extends Component {
    static propTypes = {
        work: PropTypes.object,
        editable: PropTypes.bool,
        onChange: PropTypes.func,
        loadWork: PropTypes.func.isRequired,
    };
    static defaultProps = {
        onChange: defaultFunction,
    };

    componentWillMount() {
        if (this.props.work) return;
        this.props.loadWork();
    }

    componentDidMount() {
        this.props.onChange(this.state.work || {});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            work: nextProps.work
        })
    }

    constructor(props) {
        super(props);
        this.state = {work: props.work};
    }
    
    get cellEditOptions() {
        if (!this.props.editable) {
            return undefined;
        } else {
            return {
                mode: 'click',
                blurToSave: true,
                afterSaveCell: this.handleGradeChange,
            }
        }
    }

    get commentView() {
        const {comment} = this.state.work.grade;
        if (comment) {
            return (
                <div className="col-md-5">
                    <label>Kommentaar</label>
                    <textarea className="form-control" ref={el => {this.commentTextArea = el}} readOnly={!this.props.editable} onChange={this.handleCommentChange} value={comment}/>
                </div>
            )
        }
    }
    render() {
        const {work} = this.state;
        if (!work) {
            return (
                <p className="text-center">Andmed puuduvad</p>
            )
        }
        return (
            <div>
                <GeneralDetails work={work} editable={this.props.editable} onStudentsSelect={this.handleStudentsChange}/>
                <div className="row">
                    <div className={`col-md-${work.grade.comment ? '7' : '12'}`}>
                        <BootstrapTable data={work.grade.criteria} hover cellEdit={this.cellEditOptions}>
                            <TableHeaderColumn dataField="description" isKey>{'Kriteerium'}</TableHeaderColumn>
                            <TableHeaderColumn dataField="score">{'Punktid'}</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                    {this.commentView}
                </div>
              </div>
        )
    }
    handleStudentsChange = (students) => {
        this.setState({
            work: {...this.state.work, coauthors: students}
        });
    };
    handleCommentChange = () => {
        this.setState({
            work: {...this.state.work, grade: {...this.state.work.grade, comment: this.commentTextArea.value}}
        });
    };
    handleGradeChange = (criterion) => {
        const {criteria} = this.state.work.grade;
        if (criteria.findIndex(aCriterion => {
            if (aCriterion.description === criterion.description) {
                return aCriterion = criterion;
            }
        }) < 0) {
            criteria.push(criterion);
        }
        this.setState({
            work: {...this.state.work, grade: {...this.state.work.grade, criteria}}
        })
    };
    componentDidUpdate() {
        this.props.onChange(this.state.work || {});
    }
}

class GeneralDetails extends Component {
    static propTypes = {
        work: PropTypes.object.isRequired,
        editable: PropTypes.bool,
        onStudentsSelect: PropTypes.func,
    };
    static defaultProps = {
        onStudentsSelect: defaultFunction,
    };
    handleStudentsSelect = (students) => {
        this.props.onStudentsSelect(students);
    };
    get submissionView() {
        const {submission} = this.props.work;
        if (submission) {
            return (
                <div className="form-group">
                    <label>Esitatud töö</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-link"></i></span>
                        <input readOnly className="form-control" placeholder="Aadress" type="text" value={submission}/>
                    </div>
                </div>
            )
        }
    }


    get coauthorsView() {
        const coauthors = (this.props.work.coauthors || []).join(', ');
        if (!this.props.editable) {
            return (
                <div className="form-group">
                    <label>Kaasautorid</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-users"></i></span>
                        <input type="text" className="form-control" readOnly value={coauthors} />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="form-group">
                    <label>Õpilane</label>
                    <StudentsSelection selected={this.props.work.coauthors} onSelect={this.handleStudentsSelect} />
                </div>
            )
        }

    }

    render() {
        if (this.submissionView || this.coauthorsView) {
            return (
                <form className="form-horizontal">
                    <div className="col-md-7">
                        {this.submissionView}
                        {this.coauthorsView}
                    </div>
                </form>
            )
        }
        else {
            return (<div></div>);
        }
    }
}
