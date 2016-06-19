import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {defaultFunction} from '../util.js';

export default class Navigation extends Component {
    static propTypes = {
        loggedInUser: PropTypes.string,
        onLogOut: PropTypes.func,
        isStudent: PropTypes.bool,
        isTeacher: PropTypes.bool,
    };
    static defaultPropTypes = {
        loggedInUser: '',
        onLogOut: defaultFunction,
    };

    handleLogOut = () => {
        this.props.onLogOut();
    };
    render() {
        const {loggedInUser, isTeacher, isStudent} = this.props;
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {isStudent && (<li><Link to="/student">Esitamine</Link></li>)}
                            {isTeacher && (<li><Link to="/teacher">Hindamine</Link></li>)}
                            {(isTeacher || isStudent) && (<li><Link to="/grades">Hinded</Link></li>)}
                        </ul>
                        {loggedInUser ? (<UserMenu name={loggedInUser} onLogOut={this.handleLogOut}/>) : ''}
                    </div>
                </div>
            </nav>
        );
    }
}

const UserMenu = ({name, onLogOut}) => (
    <ul className="nav navbar-nav navbar-right">
        <li>
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">{name}&nbsp;&nbsp;&nbsp;<i className="fa fa-user fa-lg"></i><span class="caret"></span></a>
            <ul className="dropdown-menu">
                <li><a href="#" onClick={onLogOut}>Logi välja</a></li>
            </ul>
        </li>
    </ul>
);
