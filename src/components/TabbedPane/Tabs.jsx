import React, { Component, PropTypes } from 'react';
import Tab from './Tab.jsx';

export default class Tabs extends Component {
    static propTypes = {
        children: PropTypes.array.isRequired,
    }
    render() {
        const {props} = this;
        return (
            <ul className="nav nav-tabs nav-justified">
                {props.children.map(tab => {
                    return tab;
                })}
            </ul>
        );
    }
}
