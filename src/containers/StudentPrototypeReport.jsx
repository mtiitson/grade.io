import React, { Component, PropTypes } from 'react';
import WorkReport from '../components/Reports/WorkReport.jsx';
import PrototypeWork from '../models/PrototypeWork.js';
import Grade from '../models/Grade.js';
import Criterion from '../models/Criterion.js';
import {connect} from 'react-redux';
import {fetchPrototypes} from '../actions/index.js';


export default connect(
    (state, ownProps) => ({
        work: state.prototypes.loaded && state.prototypes.loaded.submitted ? state.prototypes.loaded.submitted.find(proto => proto.id === ownProps.id) : null,
    }),
    (dispatch, ownProps) => ({
        loadWork: () => dispatch(fetchPrototypes(ownProps.student)),
    }),
)(WorkReport);
