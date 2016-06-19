import React, { Component, PropTypes } from 'react';
import GradesReport from '../components/Reports/GradesReport.jsx';
import {connect} from 'react-redux';
import {fetchGrades} from '../actions/index.js';

export default connect(
    state => ({
        grades: state.grades.loaded || undefined 
    }),
    dispatch => ({
        loadGrades: () => dispatch(fetchGrades()) 
    }),
)(GradesReport)