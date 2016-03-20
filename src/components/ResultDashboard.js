import React, { Component, PropTypes } from 'react';
import Gauge from './ResultDashboard/Gauge';

export default class ResultDashboard extends Component {
    static propTypes = {
        results: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            current: PropTypes.number,
            treshold: PropTypes.number,
            maximum: PropTypes.number,
        })).isRequired,
        onSelect: PropTypes.func,
    }

    
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.props.results.map((result, i) => {
                        return (
                            <div className="col-md-3" key={i}>
                                <Gauge 
                                    key={i}
                                    onClick={this.handleSelect.bind(this, result)}
                                    {...result}
                                    />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    handleSelect(result) {
        if (this.props.onSelect) {
            this.props.onSelect(result);
        }
    }
}

