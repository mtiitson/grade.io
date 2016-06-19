import React, { Component, PropTypes } from 'react';
import WorkReport from '../components/Reports/WorkReport.jsx';
import Editable from '../components/Reports/Editable.jsx';
import {connect} from 'react-redux';
import {fetchQuiz, fetchPrototypes, fetchLabs, updateLab, updatePrototype, updateQuiz} from '../actions/index.js';

const EditableWorkReport = ({work, loadWork, onCancel, onSave}) => (
    <Editable onCancel={onCancel} onSave={onSave} readOnly={!work}>
        <WorkReport work={work} loadWork={loadWork} />
    </Editable>
)

export default connect(
    (state, ownProps) => ({
        get work() {
            switch (ownProps.type) {
                case 'PROTOTYPE_1':
                    return state.prototypes.loaded ? state.prototypes.loaded.submitted.find(proto => proto.id === 1) : null;
                case 'PROTOTYPE_2':
                    return state.prototypes.loaded ? state.prototypes.loaded.submitted.find(proto => proto.id === 2) : null;
                case 'LAB':
                    return state.labs.loaded || null;
                case 'QUIZ':
                    return state.quiz.loaded ? state.quiz.loaded : null;
            }
        }
    }),
    (dispatch, ownProps) => ({
        loadWork: () => {
            switch (ownProps.type) {
                case 'PROTOTYPE_1':
                case 'PROTOTYPE_2':
                    return dispatch(fetchPrototypes(ownProps.author));
                case 'LAB':
                    return dispatch(fetchLabs(ownProps.author, ownProps.id));
                case 'QUIZ':
                    return dispatch(fetchQuiz(ownProps.author));
            }
        },
        onSave: (work) => {
            switch (ownProps.type) {
                case 'PROTOTYPE_1':
                case 'PROTOTYPE_2':
                    return dispatch(updatePrototype(ownProps.author, work));
                case 'LAB':
                    return dispatch(updateLab(ownProps.author, work));
                case 'QUIZ':
                    return dispatch(updateQuiz(ownProps.author, work));
            }
        }
    })
)(EditableWorkReport);
