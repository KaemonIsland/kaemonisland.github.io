import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeTheme(this.props.theme);
  }

  render() {
    let buttonTheme = this.props.theme;
    return (
      <button onClick={this.handleClick} className={styles[buttonTheme]}>{this.props.title}</button>
    )
  }
}

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default Button;