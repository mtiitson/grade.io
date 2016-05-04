import React, { Component, PropTypes, Children, cloneElement } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';

export default class Editable extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired,
        onSave: PropTypes.func,
        onCancel: PropTypes.func,
    }
    constructor(props) {
        super(props);
    }
    render() {
        const makeEditable = (el) => {
            return cloneElement(el, {
                editable: true
            });
        }
        return (
                <div>
                    {Children.map(this.props.children, makeEditable)}
                    <div className="row">
                        <div className="col-md-7">
                            <div className="btn-group btn-group-justified" role="group"  style={styles.button}>
                                <div className="btn-group" role="group">
                                    <button type="button" onClick={this.handleSave} className="btn btn-success">Salvesta</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="btn-group btn-group-justified" role="group"  style={styles.button}>
                                <div className="btn-group" role="group">
                                    <button type="button" onClick={this.handleCancel} className="btn btn-danger">Tühista</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
    handleChildChange = (state) => {
        this.setState(state);
        console.log(state);
    }
    handleSave = () => {
        if (this.onSave) {
            this.onSave(this.state);
        }
    };
    handleCancel = () => {
        if (this.onCancel) {
            this.onCancel();
        }
    }
}
const styles = {
    button: {
        marginTop: '2em',
        marginBottom: '2em',
    }
}
