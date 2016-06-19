import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import bootstrapSelect from 'bootstrap-select';
import CoauthorSearch from './StudentsSelection.jsx';
import {defaultFunction} from '../../util.js';

export default class Prototype extends Component {
    static propTypes = {
        prototypeId: PropTypes.number,
        coauthors: PropTypes.array,
        submission: PropTypes.string,
        onCoauthorsChange: PropTypes.func,
        onSubmit: PropTypes.func,
        onSubmissionChange: PropTypes.func,
        closed: PropTypes.bool,
        id: PropTypes.number,
        loadPrototypes: PropTypes.func.isRequired,
    };
    static defaultProps = {
        onSubmit: defaultFunction,
        onSubmissionChange: defaultFunction,
        coauthors: [],
        onCoauthorsChange: defaultFunction,
    };
    get valid() {
        if (this.form) {
            return this.form.checkValidity();
        } else {
            return false;
        }
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.loadPrototypes();
    }
    render() {
        if (this.props.closed) {
            return (
                <div className="row" style={styles.row}>
                    <p className="text-center">Esitamine on suletud</p>
                </div>
            )
        }
        return (
            <div className="row" style={styles.row}>
                <form ref={(form) => {this.form = form}}>
                    <div className="col-md-5">
                        <CoauthorSearch
                            selected={this.props.coauthors}
                            onSelect={this.handleCoauthorSelect}/>
                    </div>
                    <div className="col-md-5">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-link"></i></span>
                            <input type="url"
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
    handleCoauthorSelect = (coauthors) => {
        this.props.onCoauthorsChange(coauthors);
    };
    handleSubmissionChange = (event) => {
        this.props.onSubmissionChange(event.target.value);
    };
    handleSubmit = () => {
        if (!this.valid) return;
        const {onSubmit, coauthors, submission, prototypeId} = this.props;
        onSubmit({coauthors, submission, prototypeId});
    };
}
const styles = {
    row: {
        paddingTop: '2em',
        paddingBottom: '2em',
    }
}
