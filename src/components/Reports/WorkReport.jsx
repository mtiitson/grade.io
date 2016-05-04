import React, { Component, PropTypes } from 'react';
import Work from '../../models/Work.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';
import CoauthorSearch from '../SubmitForm/CoauthorSearch.jsx';

export default class WorkReport extends Component {
    static propTypes = {
        work: PropTypes.instanceOf(Work),
        editable: PropTypes.bool,
        onChange: PropTypes.func,
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

    constructor(props) {
        super(props);
        this.state = {
            work: props.work,
        }
    }
    get commentView() {
        const {comment} = this.props.work;
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
                <GeneralDetails work={work} editable={this.props.editable}/>
                <div className="row">
                    <div className={`col-md-${work.comment ? '7' : '12'}`}>
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
    handleCommentChange = () => {
        this.setState({
            work: Object.assign(this.state.work, {comment: this.commentTextArea.value})
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
    };
    componentDidUpdate() {
        if (this.onChange) {
            this.onChange(this.state.work);
        }
    }
}

class GeneralDetails extends Component {
    static propTypes = {
        work: PropTypes.instanceOf(Work).isRequired,
        editable: PropTypes.bool,
    }

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
        const coauthors = this.props.work.getCoauthors('Mati Kaal').join(', ');
        if (!!coauthors && coauthors.length) {
            return (
                <div className="form-group">
                    <label>Kaasautorid</label>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-users"></i></span>
                        <input type="text" className="form-control" readOnly value={coauthors} />
                    </div>
                </div>
            )
        } else if (this.props.editable) {
            return (
                <div className="form-group">
                    <label>Õpilane</label>
                    <CoauthorSearch />
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
