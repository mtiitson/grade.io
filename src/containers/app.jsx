import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navigation from '../containers/Navigation.jsx';

export default class App extends Component {
    //static propTypes = {
    //    state: PropTypes.object.isRequired,
    //    action: PropTypes.func.isRequired
    //}
	render() {
		return (
            <div>
                <Navigation />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
		);
	}
}
