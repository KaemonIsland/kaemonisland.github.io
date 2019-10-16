import React, { Component } from 'react';
import styles from './GridItem.module.scss';
import PropTypes from 'prop-types';

class GridItem extends Component {
  render() {
    let { image, alt, type, children } = this.props;
    
    if (type === 'image') {
      return (
        <div className={styles.gridItemImage}>
          <img src={image} alt={alt} />
        </div>
      )
    } else if (type === 'text') {
      return (
        <div className={styles.gridItemText}>
          {children}
        </div>
      )
    }
  }
}

export default GridItem;

GridItem.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string.isRequired
}