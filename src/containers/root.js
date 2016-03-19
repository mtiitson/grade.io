import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import App from './app';
import Authentication from '../components/Authentication';
import ResultDashboard from '../components/ResultDashboard';

export default class Root extends Component {
	static propTypes = {
		store: PropTypes.shape({dispatch: PropTypes.func.isRequired}).isRequired,
	}
	render() {
		const { store } = this.props;
		return (
			<Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <Route path="/auth" component={Authentication}/>
                        <Route path="/dash" component={ResultDashboard}/>
                    </Route>
                </Router>
			</Provider>
		);
	}
}
