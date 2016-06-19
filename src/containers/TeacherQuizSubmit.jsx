import React, { Component, PropTypes } from 'react';
import WorkReport from '../components/Reports/WorkReport.jsx';
import Editable from '../components/Reports/Editable.jsx';
import {connect} from 'react-redux';
import {updateQuiz} from '../actions/index.js';


const EditableWorkReport = ({work, loadWork, onCancel, onSave}) => (
    <Editable onCancel={onCancel} onSave={onSave} readOnly={!work}>
        <WorkReport work={work} loadWork={loadWork} />
    </Editable>
);

export default connect(
    (state, ownProps) => ({
        work,
        loadWork: new Function(),
    }),
    (dispatch, ownProps) => ({
        onSave: work => dispatch(updateQuiz(work.coauthors ? work.coauthors[0] : null, work)),
    })
)(EditableWorkReport);

const work = {
    grade: {
        criteria: [
            {
                description: "1. Küsimus"
            },
            {
                description: "2. Küsimus"
            },
            {
                description: "3. Küsimus"
            },
            {
                description: "4. Küsimus"
            }
        ]

    }
}

