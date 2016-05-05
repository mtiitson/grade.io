import {defaultFunction} from '../../util.js';
import React, {Component, PropTypes} from 'react';
import TabbedPane from '../TabbedPane/TabbedPane.jsx';

export default class Authentication extends Component {
    static propTypes = {
        selectedTab: PropTypes.string.isRequired,
        onTabSelection: PropTypes.func,
        tabs: PropTypes.array,
    };
    static defaultProps = {
        onTabSelection: defaultFunction,
    };
    handleTabSelection = (tab) => {
        this.props.onTabSelection(tab);
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <TabbedPane
                        tabs={this.props.tabs}
                        selectedTab={this.props.selectedTab}
                        onTabSelection={this.handleTabSelection}
                    />
                </div>
                <div className="col-md-3">
                </div>
            </div>
        );
    }
}
