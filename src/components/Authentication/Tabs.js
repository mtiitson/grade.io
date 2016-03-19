import React, { Component } from 'react';
import Tab from './Tab';

export default class Tabs extends Component {
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
