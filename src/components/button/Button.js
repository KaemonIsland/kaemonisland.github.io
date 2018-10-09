import React, { Component } from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttonTheme = this.props.theme;
    return (
      <button onClick={this.props.onClick} className={styles.btn}>{this.props.title}</button>
    )
  }
}

Button.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Button;