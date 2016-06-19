import React, { Component, PropTypes } from 'react';
import CoauthorSearch from './StudentsSelection.jsx';
import {defaultFunction} from '../../util.js';
import $ from 'jquery';
import bootstrapSelect from 'bootstrap-select';

export default class Lab extends Component {
    static propTypes = {
        coauthors: PropTypes.array,
        submission: PropTypes.string,
        labId: PropTypes.string,
        labNames: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number,
        })),
        onSubmit: PropTypes.func,
        onCoauthorsChange: PropTypes.func,
        onSubmissionChange: PropTypes.func,
        onLabIdChange: PropTypes.func,
        loadLabNames: PropTypes.func.isRequired,
    };

    static defaultProps = {
        onSubmit: defaultFunction,
        onSubmissionChange: defaultFunction,
        onLabIdChange: defaultFunction,
        onCoauthorsChange: defaultFunction,
        labNames: [],
    };

    componentWillMount() {
        this.props.loadLabNames()
    }

    constructor(props) {
        super(props);
    }
    get valid() {
        if (this.form) {
            return this.form.checkValidity();
        } else {
            return false;
        }
    }
    handleSubmit = () => {
        if (!this.valid) return;
        const {onSubmit, coauthors, submission, labId} = this.props;
        onSubmit({coauthors, submission, labName: labId});
    };
    handleSubmissionChange = (event) => {
        this.props.onSubmissionChange(event.target.value);
    };
    handleCoauthorSelect = (coauthors) => {
        this.props.onCoauthorsChange(coauthors);
    };
    handleLabSelect = (labId)  => {
        this.props.onLabIdChange(labId);
    };
    render() {
        return (
            <div className="row" style={styles.row}>
                <form ref={(form) => {this.form = form}} role="form">
                    <div className="col-md-3">
                        <LabList
                            labs={this.props.labNames}
                            selected={this.props.labId}
                            onSelect={this.handleLabSelect}
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <CoauthorSearch
                            selected={this.props.coauthors}
                            onSelect={this.handleCoauthorSelect}
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-link"></i></span>
                            <input
                                   type="url"
                                   className="form-control" 
                                   placeholder="Aadress"
                                   required
                                   value={this.props.submission}
                                   onChange={this.handleSubmissionChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="btn-group btn-group-justified" role="group">
                            <div className="btn-group" role="group">
                                <button type="button"
                                        className={`btn btn-${this.valid ? 'primary' : 'disabled'}`}
                                        onClick={this.handleSubmit}>Esita</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const styles = {
    row: {
        paddingTop: '2em',
        paddingBottom: '2em',
    }
}

const LabList = ({labs = [], selected = '', onSelect = defaultFunction, required = false}) => (
    <select
            /*
            ref={select => {
                $(select).selectpicker({
                    mobile: true,
                    showTick: true,
                    width: '100%',
                });
            }}
            */
            required={required}
            value={selected}
            className="form-control"
            onChange={e => onSelect(e.target.value)}
    >
        <option value={''}>Vali praktikum...</option>
        {labs.map((lab, i) => (
            <option key={i} value={lab.id}>{lab.name}</option>
        ))}
    </select>
);

