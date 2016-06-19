import React, { Component, PropTypes } from 'react';
import WorksList from '../components/WorksList.jsx';
import {connect} from 'react-redux';
import {fetchWorks} from '../actions/index.js';

export default connect(
    state => ({
        works: state.works.loaded ? state.works.loaded._embedded.labs
            .filter(lab => (
                !!lab.graded
            ))
            .map(lab => ({
                date: lab.creationDate,
                title: lab.labName.name,
                id: lab.labName.id,
                authors: (lab.authors || []).map(author => typeof author === "string" ? author : author.name),
                type: 'LAB',
            }
            )) : [],
    }),
    dispatch => ({
        loadWorks: () => dispatch(fetchWorks()),
    })
)(WorksList)
