import React, { Component, PropTypes } from 'react';
import Tabs from './TabbedPane/Tabs';
import Tab from './TabbedPane/Tab';

export default class TabbedPane extends Component {
    static propTypes = {
        tabs: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    label: PropTypes.shape({
                        text: PropTypes.string,
                        type: PropTypes.oneOf(['default', 'primary','success','info','warning','danger']),
                    }),
                    content: PropTypes.obj,
                })
            ).isRequired,

    }

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: props.tabs[0],
        }
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
                                            selected={this.state.selectedTab === tab}
                                            onSelect={this.handleTabSelection.bind(this, tab)}
                                        />
                                    );
                                })}
                            </Tabs>
                        </div>
                        <div className="panel-body">
                            {this.state.selectedTab.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleTabSelection(tab) {
        this.setState({
            selectedTab: tab
        });
    }
}
