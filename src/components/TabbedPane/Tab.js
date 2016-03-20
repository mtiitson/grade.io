import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Tab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this;
        return <li className={classNames({'active': props.selected})} role="presentation" onClick={this.handleClick}><a href="#">{props.title}</a></li>
    }
    handleClick = () => {
        if (this.props.onSelect) {
            this.props.onSelect();
        }
    }
}

