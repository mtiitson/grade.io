import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import bootstrapSwitch from 'bootstrap-switch';
import PasswordField from './PasswordField';


export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <span className="fa fa-envelope"></span>
                        </span>
                        <input type="text" className="form-control" placeholder="Emaili address" />
                    </div>
                </div>

                <div className="form-group">
                    <PasswordField />
                </div>

                <div className="form-group">
                    <input type="checkbox" id="rememberMeCheckbox" ref={input => {
                        $(input).bootstrapSwitch({size: 'mini', onText: '', offText: '', handleWidth: 20} );
                    }}/>
                    <label htmlFor="rememberMeCheckbox" style={{fontWeight: 'normal', paddingLeft: 5}}>Pea mind meeles</label>
                </div>

                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary">Logi sisse</button>
                    </div>
                </div>
            </div>
        );
    }
}