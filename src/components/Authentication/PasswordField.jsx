import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class PasswordField extends Component {
    static propTypes = {
        visibleByDefault: PropTypes.bool,
        value: PropTypes.string,
        onChange: PropTypes.func,
    };
    static defaultProps = {
        visibleByDefault: false,
        value: '',
        onChange: new Function(),
    };
    constructor(props) {
        super(props);
        this.state = {
            visible: !!props.visibleByDefault,
        }

    }
    render() {
        const {state, props} = this;
        return (
            <div style={styles.passwordField}>
                <div className="input-group">
                    <span className="input-group-addon">
                        <span className="fa fa-key"></span>
                    </span>
                    <input type={state.visible ? 'text' : 'password'}
                           required
                           className="form-control"
                           placeholder="Parool"
                           style={styles.input}
                           value={props.value}
                           onChange={this.handleChange}
                    />
                </div>
                <div style={styles.visibilityToggle} onClick={this.handleClick}>
                    <i className={classNames('fa', {'fa-eye': !state.visible, 'fa-eye-slash': state.visible })} style={styles.visibilityIcon}></i>
                </div>
            </div>
        )
    }
    handleChange = (event) => {
        this.props.onChange(event.target.value)
    };
    handleClick = () => {
        this.setState({
            visible: !this.state.visible
        })
    };
}

const styles = {
    passwordField : {
        position: 'relative',
    },
    input : {
        paddingRight: '2em',
    },
    visibilityToggle: {
        zIndex: 4, 
        height: '100%',
        position: 'absolute', 
        margin: 'auto',
        right: 0,
        top: 0,
        bottom: 0,
        width: '2em',
    },
    visibilityIcon: {
        zIndex: 3, 
        height: '1em',
        position: 'absolute', 
        margin: 'auto',
        right: '0.5em',
        top: 0,
        bottom: 0,
    }
}
