import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import bootstrapSelect from 'bootstrap-select';
import Typeahead from 'react-bootstrap-typeahead';

export default class Lab extends Component {
    render() {
        return (
            <div className="row" style={styles.row}>
                <div className="col-md-3">
                    <select ref={select => {
                        $(select).selectpicker({
                            mobile: true,
                            showTick: true,
                            width: '100%',
                        });
                    }}>
                      <option>Vali praktikum...</option>
                      <option>Prototüüpimine paberil</option>
                      <option>Veebilehtede põhjad</option>
                      <option>Frustratsiooniliides</option>
                      <option>Kassid</option>
                      <option>Nurgalised kassid</option>
                      <option>Süntaktiliselt äge CSS</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-users"></i></span>
                        <Typeahead 
                            multiple
                            emptyLabel={'Õpilast ei leitud'}
                            placeholder={'Kaasautorid'}
                            options={[
                                {label: "Milvi Mulvi"},
                                {label: "Tiiu Tiik"},
                                {label: "Riho Rünno Rein"}
                            ]}
                        />
                    </div>
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
}
const styles = {
    row: {
        paddingTop: '2em',
        paddingBottom: '2em',
    }
}
