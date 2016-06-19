import React, { Component, PropTypes } from 'react';
import LabSeriesReport from '../components/Reports/LabSeriesReport.jsx';
import {connect} from 'react-redux';
import {fetchLabs} from '../actions/index.js';



export default connect(
    state => ({
        labs: state.labs.loaded ? state.labs.loaded.submitted : [],
    }),
    (dispatch, ownProps) => ({
        loadLabs: () => dispatch(fetchLabs(ownProps.student)),
    })
)(LabSeriesReport)


