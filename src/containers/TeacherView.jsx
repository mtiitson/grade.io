import React, { Component, PropTypes } from 'react';
import TabbedPane from '../components/TabbedPane/TabbedPane.jsx';
import TeacherUngradedWorks from './TeacherUngradedWorks.jsx';
import TeacherGradedWorks from './TeacherGradedWorks.jsx';
import TeacherQuizSubmit from './TeacherQuizSubmit.jsx';
import {Modal} from 'react-bootstrap';
import {changeWorksTab} from '../actions/index.js';
import {connect} from 'react-redux';

const Works = ({tabs, selectedTab, onTabSelection}) => (
    <TabbedPane
        tabs={tabs}
        selectedTab={selectedTab}
        onTabSelection={onTabSelection}
    />
);

const tabs = [
    {
        title: "Hindamata tööd",
        id: "UNGRADED",
        content: (<TeacherUngradedWorks />)
    },
    {
        title: "Hinnatud tööd",
        id: "GRADED",
        content: (<TeacherGradedWorks />)
    }
];

export default class TeacherView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quizSubmissionVisible: false,
        }
    }

    render() {
        return (
            <div>
                <Modal show={this.state.quizSubmissionVisible} backdrop="static" onHide={this.handleQuizSubmissionClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{'Kontrolltöö'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TeacherQuizSubmit
                            onCancel={this.handleQuizSubmissionClose}
                        />
                    </Modal.Body>
                </Modal>
                <div className="page-header">
                  <h2 className="h1">Hindamine</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="btn-group btn-group-justified" role="group"  style={styles.button}>
                            <div className="btn-group" role="group">
                                <button type="button" onClick={this.handleSubmitQuiz} className="btn btn-primary"><i className="fa fa-plus"></i> Lisa kontrolltöö</button>
                            </div>
                        </div>
                    </div>
                </div>
                <TeacherWorks />
            </div>
        );
    }

    handleQuizSubmissionClose = () => {
        this.setState({
            quizSubmissionVisible: false,
        });
    };
    handleSubmitQuiz = () => {
        this.setState({
            quizSubmissionVisible: true,
        });
    };

}
const styles = {
    button: {
        marginTop: '2em',
        marginBottom: '2em',
    }
};

const TeacherWorks = connect(
    state => ({
        tabs,
        selectedTab: state.worksBlock.activeTab,
    }),
    dispatch => ({
        onTabSelection: tab => dispatch(changeWorksTab(tab))
    })
)(Works);
