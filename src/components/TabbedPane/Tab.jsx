import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Tab extends Component {
    static propTypes = {
        onSelect: PropTypes.func,
        title: PropTypes.string.isRequired,
        label: PropTypes.shape({
            text: PropTypes.string,
            type: PropTypes.oneOf(['default', 'primary','success','info','warning','danger']),
        }),
    };
    constructor(props) {
        super(props);
    }

    render() {
        const {selected, title, label} = this.props;
        let labelElement;
            if (label) { 
                labelElement = <span className={`label label-${label.type}`}>{label.text}</span>;
            }
        return (
            <li className={classNames({'active': selected})} role="presentation" onClick={this.handleClick}>
                <a href="javascript:;">{title} {labelElement}</a> 
            </li>
        )
    }
    handleClick = () => {
        if (this.props.onSelect) {
            this.props.onSelect();
        }
    }
}

