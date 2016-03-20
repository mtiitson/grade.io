import React, { Component, PropTypes } from 'react';
import TabbedPane from '../components/TabbedPane';
import TeacherUngradedWorks from './TeacherUngradedWorks';
import TeacherGradedWorks from './TeacherGradedWorks';

export default class TeacherWorkspace extends Component {
    tabs = [
        {
            title: "Hindamata tööd",
            content: (<TeacherUngradedWorks />)
        },
        {
            title: "Hinnatud tööd",
            content: (<TeacherGradedWorks />)
        }
    ]
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="btn-group btn-group-justified" role="group"  style={styles.button}>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-primary"><i className="fa fa-plus-square"></i> Lisa kontrolltöö</button>
                            </div>
                        </div>
                    </div>
                </div>
                <TabbedPane tabs={this.tabs}/>
            </div>
        );
    }
}
const styles = {
    button: {
        marginTop: '2em',
        marginBottom: '2em',
    }
}
