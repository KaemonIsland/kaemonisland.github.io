import React, { Component } from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return <button onClick={this.props.onClick} className={styles.btn}>{this.props.title}</button>;
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;