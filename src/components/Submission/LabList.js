import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import bootstrapSelect from 'bootstrap-select';

export default class LabList extends Component {
    render() {
        return (
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
        );
    }
}
