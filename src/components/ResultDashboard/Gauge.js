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
        onClick: PropTypes.func,
    }
    render() {
        const {title, current, maximum} = this.props;
        return (
            <div className="text-center">
                <img onClick={this.handleClick} style={styles.link} src={this.gaugeColor} style={[styles.gauge, this.achievement && styles.achievement]} width="200" height="200" className="img-responsive center-block" alt={title} />                     
                <h4 onClick={this.handleClick} style={styles.link}>{title}</h4><span className="text-muted">{current}{maximum ? `/${maximum}` : ''}</span>
            </div>
        );
    }
    handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
    get gaugeColor() {
        const {current, maximum, treshold} = this.props;
        if (current === 0) {
            return Colors.DISABLED.base64;
        }
        if (this.achievement) {
            return Colors.ACHIEVEMENT.base64;
        }
        if (current >= treshold || !treshold) {
            return Colors.SUCCESS.base64;
        }
        if (current < treshold) {
            return Colors.DANGER.base64;
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
        cursor: 'pointer',
        ':hover': {
            borderColor: '#66afe9',
            outline: 0,
            WebkitBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6)',
            boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6)',
        },
    },
    link: {
        cursor: 'pointer',
    },

}

