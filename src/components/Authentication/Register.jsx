import React, { Component, PropTypes } from 'react';
import PasswordField from './PasswordField.jsx';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="form-group has-feedback">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <span className="fa fa-user"></span>
                        </span>
                        <input type="text" className="form-control" placeholder="Ees- ja perekonnanimi" />
                    </div>
                </div>
                <div className="form-group has-feedback">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <span className="fa fa-envelope"></span>
                        </span>
                        <input type="text" className="form-control" placeholder="Emaili address" />
                    </div>
                </div>

                <div className="form-group">
                    <PasswordField visibleByDefault/>
                </div>

                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary">Registreeri</button>
                    </div>
                </div>
            </div>
        );
    }
}
