import React, { Component, PropTypes } from 'react';
import WorksList from '../components/WorksList';

export default class TeacherUngradedWorks extends Component {
    works = [
    ]
    render() {
        return <WorksList works={this.works} />;
    }
}
