import React, { Component, PropTypes } from 'react';
import { Colors } from '../../constants/UIConstants';
import Radium from 'radium';

@Radium
export default class Gauge extends Component {
    static propTypes = {
        treshold: PropTypes.number,
        maximum: PropTypes.number,
        current: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }
    render() {
        const {title, current, maximum} = this.props;
        return (
            <div className="text-center">
                <img src={this.gaugeColor} style={[styles.gauge, this.achievement && styles.achievement]} width="200" height="200" className="img-responsive center-block" alt={title} />                     
                <h4>{title}</h4><span className="text-muted">{current}{maximum ? `/${maximum}` : ''}</span>
            </div>
        );
    }
    get gaugeColor() {
        const {current, maximum, treshold} = this.props;
        if (this.achievement) {
            return Colors.ACHIEVEMENT.base64;
        }
        if (current >= treshold || !treshold) {
            return Colors.SUCCESS.base64;
        }
        if (current < treshold) {
            return Colors.DISABLED.base64;
        }
    }
    get achievement() {
        const {current, maximum} = this.props;
        return maximum && current === maximum;
    }
}

const styles = {
    gauge: {
        borderRadius: '50%',
    },
    achievement: {
        boxShadow: `0px 0px 100px ${Colors.ACHIEVEMENT.hex}`
    }

}
