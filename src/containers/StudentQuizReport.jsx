import React, { Component, PropTypes } from 'react';
import QuizWork from '../models/QuizWork.js';
import WorkReport from '../components/Reports/WorkReport.jsx';
import Grade from '../models/Grade.js';
import Criterion from '../models/Criterion.js';
import {fetchQuiz} from '../actions/index.js';
import {connect} from 'react-redux';

export default connect(
    (state, ownProps) => ({
        work: state.quiz.loaded || null,
    }),
    (dispatch, ownProps) => ({
        loadWork: () => dispatch(fetchQuiz(ownProps.student)),
    }),
)(WorkReport);
