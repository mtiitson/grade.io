import React, { Component, PropTypes } from 'react';
import Tabs from './Tabs.jsx';
import Tab from './Tab.jsx';
import {defaultFunction} from '../../util.js';

export default class TabbedPane extends Component {
    static propTypes = {
        tabs: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    id: PropTypes.string.isRequired,
                    label: PropTypes.shape({
                        text: PropTypes.string,
                        type: PropTypes.oneOf(['default', 'primary','success','info','warning','danger']),
                    }),
                    content: PropTypes.obj,
                })
            ).isRequired,
        selectedTab: PropTypes.string.isRequired,
        onTabSelection: PropTypes.func,
    };

    static defaultProps = {
        onTabSelection: defaultFunction,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default with-nav-tabs">
                        <div className="panel-heading">
                            <Tabs>
                                {this.props.tabs.map((tab,i) => {
                                    const {title, label} = tab;
                                    return (
                                        <Tab
                                            key={i}
                                            title={title}
                                            label={label}
                                            selected={this.props.selectedTab === tab.id}
                                            onSelect={this.handleTabSelection.bind(this, tab.id)}
                                        />
                                    );
                                })}
                            </Tabs>
                        </div>
                        <div className="panel-body">
                            {this.props.tabs.find(tab => tab.id === this.props.selectedTab).content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleTabSelection(tab) {
        this.props.onTabSelection(tab);
    }
}
