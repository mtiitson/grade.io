import React, { Component, PropTypes } from 'react';
import PasswordField from './PasswordField.jsx';
import {defaultFunction} from '../../util.js';
import {Form, Mixin} from 'formsy-react';



export default class Login extends Component {
    static propTypes = {
        username: PropTypes.string,
        onUsernameChange: PropTypes.func,
        onLogIn: PropTypes.func,
    };
    static defaultProps = {
        onUsernameChange: defaultFunction,
        onLogIn: defaultFunction,
        username: '',
    };
    constructor(props) {
        super(props);
        this.state = {
            password: '',
        };
    }
    handleLogIn = () => {
        if (!this.valid) return;
        const {password} = this.state;
        const {username, onLogIn} = this.props;
        onLogIn(username, password);
    };
    handleUsernameChange = (event) => {
        this.props.onUsernameChange(event.target.value);
    };
    handlePasswordChange = (password) => {
        this.setState({
            password,
        });
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
            <form ref={(form) => {this.form = form}} onSubmit={this.handleLogIn}>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <span className="fa fa-envelope"></span>
                        </span>
                        <input type="email"
                               required
                               className="form-control"
                               placeholder="Emaili aadress"
                               value={this.props.username}
                               onChange={this.handleUsernameChange} />
                    </div>
                </div>

                <div className="form-group">
                    <PasswordField
                        value={this.state.password}
                        onChange={this.handlePasswordChange} />
                </div>

                <div className="form-group">
                    <input type="checkbox" 
                           id="rememberMeCheckbox"/>
                    <label htmlFor="rememberMeCheckbox" style={{fontWeight: 'normal', paddingLeft: 5}}>Pea mind meeles</label>
                </div>

                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group" role="group">
                        <button type="button"
                                className={`btn btn-${this.valid ? 'primary' : 'disabled'}`}
                                onClick={this.handleLogIn}
                                >
                            Logi sisse
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}


