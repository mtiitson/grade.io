import React, { Component, PropTypes } from 'react';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import Tabs from './Authentication/Tabs';
import Tab from './Authentication/Tab';

export default class Authentication extends Component {
    tabs = [
        {
            title: "Logi sisse", 
            content: (<Login />)
        }, 
        {
            title: "Registreeri", 
            content: (<Register />)
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.tabs[0],
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="panel panel-default with-nav-tabs">
                        <div className="panel-heading">
                            <Tabs>
                                {this.tabs.map((tab,i) => {
                                    return (
                                        <Tab
                                            key={i}
                                            title={tab.title}
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
