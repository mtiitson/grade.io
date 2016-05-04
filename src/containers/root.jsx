import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import App from './app.jsx';
import Authentication from './Authentication.jsx';
import StudentView from './StudentView.jsx';
import TeacherView from './TeacherView.jsx';
import GradesView from './GradesView.jsx';

export default class Root extends Component {
	static propTypes = {
		store: PropTypes.shape({dispatch: PropTypes.func.isRequired}).isRequired,
	}
	render() {
		const { store } = this.props;
		return (
			<Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <Route path="/student" component={StudentView}/>
                        <Route path="/auth" component={Authentication}/>
                        <Route path="/teacher" component={TeacherView}/>
                        <Route path="/grades" component={GradesView}/>
                    </Route>
                </Router>
			</Provider>
		);
	}
}
