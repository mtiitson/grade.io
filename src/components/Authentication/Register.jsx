import React, { Component, PropTypes } from 'react';
import PasswordField from './PasswordField.jsx';
import {defaultFunction} from '../../util.js';

export default class Login extends Component {
    static propTypes = {
        name: PropTypes.string,
        username: PropTypes.string,
        onNameChange: PropTypes.func,
        onUsernameChange: PropTypes.func,
        onRegister: PropTypes.func,
    };
    static defaultProps = {
        name: '',
        username: '',
        onNameChange: defaultFunction,
        onUsernameChange: defaultFunction,
        onRegister: defaultFunction,
    };
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        }
    }
    handlePasswordChange = (password) => {
        this.setState({
            password,
        });
    };
    handleUsernameChange = (event) => {
        this.props.onUsernameChange(event.target.value);
    };
    handleNameChange = (event) => {
        this.props.onNameChange(event.target.value);
    };
    handleRegister = () => {
        if (!this.valid) return;
        const {password} = this.state;
        const {username, name, onRegister} = this.props;
        onRegister(username, password, name);
    };
    get valid() {
        if (this.form) {
            return this.form.checkValidity();
        } else {
            return false;
        }
    }
    render() {
        return (
            <form ref={form => {this.form = form}}>
                <div className="form-group has-feedback">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <span className="fa fa-user"></span>
                        </span>
                        <input type="text" 
                               className="form-control" 
                               placeholder="Ees- ja perekonnanimi" 
                               required
                               value={this.props.name}
                               onChange={this.handleNameChange}
                        />
                    </div>
                </div>
                <div className="form-group has-feedback">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <span className="fa fa-envelope"></span>
                        </span>
                        <input type="email" 
                               className="form-control" 
                               placeholder="Emaili address" 
                               required
                               value={this.props.username}
                               onChange={this.handleUsernameChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <PasswordField 
                        visibleByDefault
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                </div>

                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group" role="group">
                        <button type="button"
                                className={`btn btn-${this.valid ? 'primary' : 'disabled'}`}
                                onClick={this.handleRegister}>
                            Registreeri
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
