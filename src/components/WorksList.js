import React, { Component, PropTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css!';
import 'react-bootstrap-table/css/toastr.css!';
import {toDateString} from '../util';

export default class WorksList extends Component {
    static propTypes = {
        works: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.object,
            title: PropTypes.string,
            authors: PropTypes.array
        })),
    }
    render() {
        const {works} = this.props;
        if (!works || !works.length) {
            return (
                <div className="panel panel-default" style={styles.panel}> 
                    <p className="text-center">Tööd puuduvad</p>
                </div>
            )
        }
        const worksTable = works.map((item, i)=> {
            return Object.assign(item, {key: i}, {authors: item.authors.join(', ')});
        });
        return (
            <div className="panel panel-default">
              <div className="panel-body">
                  <BootstrapTable 
                      data={worksTable} 
                      hover 
                      pagination
                      options={{
                          onRowClick: this.handleRowClick,
                          noDataText: 'Töid ei leitud',
                          clearSearch: true,
                      }} 
                      trClassName="tr-clickable">
                    <TableHeaderColumn dataField="key" isKey hidden></TableHeaderColumn>
                    <TableHeaderColumn dataField="date" filter={{type: "DateFilter"}} dataSort dataFormat={toDateString}>{'Kuupäev'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="title" filter={{type: "SelectFilter", options: workTitles}} dataSort>{'Pealkiri'}</TableHeaderColumn>
                    <TableHeaderColumn dataField="authors" filter={{type: "TextFilter"}} dataSort>{'Autorid'}</TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
        )
    }
    handleRowClick(row) {
        console.log("Clicked on ", row);
    }
}


const styles = {
    panel: {
        padding: '2em',
    }
}

function toLocalDate(date) {
    return date.toLocaleDateString();
}

const workTitles = {
    "UI:Kassid": "UI:Kassid",
    "UI:Nurgelised kassid": "UI:Nurgelised kassid",
    "Prototüüp 1": "Prototüüp 1",
    "Prototüüp 2": "Prototüüp 2",
}
