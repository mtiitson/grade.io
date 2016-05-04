import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
    render() {
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
                            <li><Link to="/auth">Külalise vaade</Link></li>
                            <li><Link to="/student">Õpilase vaade</Link></li>
                            <li><Link to="/teacher">Õpetaja vaade</Link></li>
                            <li><Link to="/grades">Hinnete vaade</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Villu Tatt&nbsp;&nbsp;&nbsp;<i className="fa fa-user fa-lg"></i><span class="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Logi välja</a></li>
                                  </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
