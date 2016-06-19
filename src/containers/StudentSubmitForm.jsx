import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import TabbedPane from '../components/TabbedPane/TabbedPane.jsx';
import Lab from '../components/SubmitForm/Lab.jsx';
import Prototype from '../components/SubmitForm/Prototype.jsx';
import {changeSubmitTab, changeInputCoauthors, changeInputSubmission, changeInputLabId, createLab, fetchLabNames, createPrototype, fetchPrototypes} from '../actions/index.js';

const SubmitForm = ({tabs, selectedTab, onTabSelection}) => (
    <TabbedPane
        tabs={tabs}
        selectedTab={selectedTab}
        onTabSelection={onTabSelection}
    />
);

const StudentLab = connect(
    state => ({
        coauthors: state.submitBlock.coauthors,
        submission: state.submitBlock.submission,
        labId: state.submitBlock.labId,
        labNames: state.labNames.loaded || [],
    }),
    dispatch => ({
        onCoauthorsChange: coauthors => dispatch(changeInputCoauthors(coauthors)),
        onSubmissionChange: submission => dispatch(changeInputSubmission(submission)),
        onLabIdChange: labId => dispatch(changeInputLabId(labId)),
        onSubmit: lab => dispatch(createLab(lab)),
        loadLabNames: () => dispatch(fetchLabNames())
    }),
)(Lab);


const StudentPrototype = connect(
    (state, ownProps) => ({
        coauthors: state.submitBlock.coauthors,
        submission: state.submitBlock.submission,
        closed: state.prototypes.loaded ? (state.prototypes.loaded.submitted || []).findIndex(proto => proto.id === ownProps.prototypeId) > -1 : true
    }),
    dispatch => ({
        onCoauthorsChange: coauthors => dispatch(changeInputCoauthors(coauthors)),
        onSubmissionChange: submission => dispatch(changeInputSubmission(submission)),
        onSubmit: prototype => dispatch(createPrototype(prototype)),
        loadPrototypes: () => dispatch(fetchPrototypes()),
    })
)(Prototype);

const tabs = [
    {
        title: "Praktikum",
        id: 'LAB',
        content: (<StudentLab />),
    },
    {
        title: "Prototüüp I",
        id: 'PROTOTYPE_1',
        content: (<StudentPrototype key={0} prototypeId={1}/>),
    },
    {
        title: "Prototüüp II",
        id: 'PROTOTYPE_2',
        content: (<StudentPrototype key={1} prototypeId={2}/>),
    }
];


const StudentSubmitForm = connect(
    state => ({
        tabs,
        selectedTab: state.submitBlock.activeTab,
    }),
    dispatch => ({
        onTabSelection: tab => dispatch(changeSubmitTab(tab))
    })
)(SubmitForm);
export default StudentSubmitForm;


