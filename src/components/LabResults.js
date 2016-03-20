import React, { Component, PropTypes } from 'react';
import LabResult from '../entities/LabResult';

export default class LabResults extends Component {
    static propTypes = {
        results: PropTypes.arrayOf(PropTypes.instanceOf(LabResult)),
    }
    render() {
        if (!this.props.results || !this.props.results.length) {
            return (
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default"  style={styles.panel}> 
                            <p className="text-center">Tulemused puuduvad</p>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default" style={styles.panel}>  
                        <table className="table table-hover"> 
                            <thead> 
                                <tr> 
                                    <th className="">Pealkiri</th>
                                    <th>Kuupäev</th> 
                                    <th>Punktid</th>
                                    <th>Kaasautorid</th>
                                </tr> 
                            </thead> 
                            <tbody> 
                                {this.props.results.map((result, i) => {
                                    return (
                                        <tr key={i}> 
                                            <th scope="row">{result.lab.title}</th>
                                            <td>{result.date.toLocaleDateString()}</td> 
                                            <td>{result.grade}</td> 
                                            <td>{result.getCoauthors("Mati Kaal")}</td> 
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
const styles = {
    panel: {
        padding: '2em',
    }
}
