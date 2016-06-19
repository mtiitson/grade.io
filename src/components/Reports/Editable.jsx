import React, { Component, PropTypes, Children, cloneElement } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';
import {defaultFunction} from '../../util.js';

export default class Editable extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired,
        onSave: PropTypes.func,
        onCancel: PropTypes.func,
        readOnly: PropTypes.bool,
    };
    static defaultProps = {
        onSave: defaultFunction,
        onCancel: defaultFunction,
        readOnly: false,
    };
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.children != this.props.children;
    }
    render() {
        const makeEditable = (el) => {
            return cloneElement(el, {
                editable: true,
                onChange: this.handleChildChange,
            });
        };
        return (
                <div>
                    {Children.map(this.props.children, makeEditable)}
                    <div className="row">
                        <div className="col-md-7">
                            <div className="btn-group btn-group-justified" role="group"  style={styles.button}>
                                <div className="btn-group" role="group">
                                    {!this.props.readOnly && (<button type="button" onClick={this.handleSave} className="btn btn-success">Salvesta</button>)}
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
    };
    handleSave = () => {
        this.props.onSave(this.state);
    };
    handleCancel = () => {
        this.props.onCancel();
    }
}
const styles = {
    button: {
        marginTop: '2em',
        marginBottom: '2em',
    }
}
