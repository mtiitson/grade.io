import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory, IndexRedirect} from 'react-router'
import { Provider } from 'react-redux';
import App from './app.jsx';
import Authentication from './Authentication.jsx';
import StudentView from './StudentView.jsx';
import TeacherView from './TeacherView.jsx';
import GradesView from './GradesView.jsx';

export default class Root extends Component {
	static propTypes = {
		store: PropTypes.shape({dispatch: PropTypes.func.isRequired}).isRequired,
	};
    requireAuth = (nextState, replace) => {
        let isAuthenticated = !!this.props.store.getState().user.loaded;
        if (!isAuthenticated) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    };
    requireTeacherRole = (nextState, replace) => {
        let isAuthenticated = this.props.store.getState().user.loaded
            && this.props.store.getState().user.loaded.roles.indexOf('teacher') > -1;
        if (!isAuthenticated) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    };
    requireStudentRole = (nextState, replace) => {
        let isAuthenticated = this.props.store.getState().user.loaded
            && this.props.store.getState().user.loaded.roles.indexOf('student') > -1;
        if (!isAuthenticated) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    };
    redirectToHome = (nextState, replace) => {
        if (!this.props.store.getState().user.loaded || !this.props.store.getState().user.loaded.roles) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            });
            return;
        }
        if (this.props.store.getState().user.loaded && this.props.store.getState().user.loaded.roles.indexOf('teacher') > -1) {
            replace({
                pathname: '/teacher',
                state: { nextPathname: nextState.location.pathname }
            });
            return;
        }
        if (this.props.store.getState().user.loaded && this.props.store.getState().user.loaded.roles.indexOf('student') > -1) {
            replace({
                pathname: '/student',
                state: { nextPathname: nextState.location.pathname }
            });
        }
    };
	render() {
		const { store } = this.props;
		return (
			<Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRedirect to="/home" />
                        <Route path="/home" onEnter={this.redirectToHome} />
                        <Route path="/login" component={Authentication}/>
                        <Route path="/student" component={StudentView} onEnter={this.requireStudentRole}/>
                        <Route path="/teacher" component={TeacherView} onEnter={this.requireTeacherRole}/>
                        <Route path="/grades" component={GradesView} onEnter={this.requireAuth}/>
                    </Route>
                </Router>
			</Provider>
		);
	}
}
