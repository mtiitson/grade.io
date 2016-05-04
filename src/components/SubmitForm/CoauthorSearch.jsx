import React, { Component, PropTypes } from 'react';
import Typeahead from 'react-bootstrap-typeahead';

export default class Coauthor extends Component {
    static propTypes = {
        onSelect: PropTypes.func,
        selected: PropTypes.array,
    }
    render() {
        return (
            <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-users"></i></span>
                <Typeahead 
                    multiple
                    emptyLabel={'Õpilast ei leitud'}
                    placeholder={'Kaasautorid'}
                    onChange={this.handleChange}
                    selected={this.props.selected}
                    options={[
                        {label: "Milvi Mulvi"},
                        {label: "Tiiu Tiik"},
                        {label: "Riho Rünno Rein"}
                    ]}
                />
            </div>
        );
    }
    handleChange = (selected) => {
        const {onSelect} = this.props;
        if (onSelect) {
            onSelect(selected);
        }
    }
}
