import React, { Component, PropTypes } from 'react';
import LabList from './LabList';
import Coauthor from './Coauthor';

export default class Lab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coauthors: [],
        }
    }
    render() {
        return (
            <div className="row" style={styles.row}>
                <div className="col-md-3">
                    <LabList />
                </div>
                <div className="col-md-3">
                    <Coauthor 
                        selected={this.state.coauthors}
                        onSelect={this.handleCoauthorSelect}/>
                </div>
                <div className="col-md-4">
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
