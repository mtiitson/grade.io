import React, { Component, PropTypes } from 'react';
import Typeahead from 'react-bootstrap-typeahead';
import {connect} from 'react-redux';
import {fetchStudents} from '../../actions/index.js';
import {defaultFunction} from '../../util.js';

class StudentSelector extends Component {
    static propTypes = {
        onSelect: PropTypes.func,
        selected: PropTypes.array,
        students: PropTypes.array,
        loadStudents: PropTypes.func.isRequired,
    };
    static defaultProps = {
        students: [],
        selected: [],
        onSelect: defaultFunction,
    };
    componentWillMount() {
        this.props.loadStudents();
    };
    render() {
        const {selected, students} = this.props;
        return (
            <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-users"></i></span>
                <Typeahead 
                    multiple
                    emptyLabel={'Õpilast ei leitud'}
                    placeholder={'Kaasautorid'}
                    onChange={this.handleChange}
                    selected={(selected || []).map(student => ({label: student}))}
                    options={students.map(student => ({label: student.name}))}
                />
            </div>
        );
    }
    handleChange = (selected) => {
        this.props.onSelect((selected || []).map(student => (student.label)));
    }
}

export default connect(
    state => ({
        students: state.students.loaded,
    }),
    dispatch => ({
        loadStudents: () => dispatch(fetchStudents()),
    }),
)(StudentSelector);
