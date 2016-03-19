import React, { Component, PropTypes } from 'react';
import Gauge from './ResultDashboard/Gauge';

export default class ResultDashboard extends Component {
    static propTypes = {
        title: PropTypes.string,
    }

    results = [
        {
            title: "Praktikumid",
            current: 1,
            treshold: 1,
        },
        {
            title: "Prototüüp 1",
            current: 16,
            treshold: 15,
            maximum: 30 
        },
        {
            title: "Protüüp 2",
            current: 0,
            treshold: 15,
            maximum: 30 
        },
        {
            title: "Kontrolltöö",
            current: 20,
            treshold: 10,
            maximum: 20, 
        },
    ]
    
    render() {
        const {title} = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.results.map((result, i) => {
                        return (
                            <div className="col-md-3" key={i}>
                                <Gauge 
                                    key={i}
                                    {...result} />;
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

