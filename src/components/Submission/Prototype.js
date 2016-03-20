import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import bootstrapSelect from 'bootstrap-select';
import Coauthor from './Coauthor';

export default class Prototype extends Component {
    static propTypes = {
        closed: PropTypes.bool,
    }
    constructor(props) {
        super(props);
        this.state = {
            coauthors: [],
        }
    }
    render() {
        if (this.props.closed) {
            return (
                <div className="row" style={styles.row}>
                    <p className="text-center">Esitamine on suletud</p>
                </div>
            )
        }
        return (
            <div className="row" style={styles.row}>
                <div className="col-md-5">
                    <Coauthor 
                        selected={this.state.coauthors}
                        onSelect={this.handleCoauthorSelect}/>
                </div>
                <div className="col-md-5">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-link"></i></span>
                        <input className="form-control" placeholder="Aadress" type="text"/>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="btn-group btn-group-justified" role="group">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-primary">Esita</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleCoauthorSelect = (coauthors) => {
        this.setState({
            coauthors
        })
    }
}
const styles = {
    row: {
        paddingTop: '2em',
        paddingBottom: '2em',
    }
}
