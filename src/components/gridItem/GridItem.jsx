import React from 'react'
import PropTypes from 'prop-types'
import styles from './GridItem.module.scss'

// prettier-ignore
export const GridItem = ({
  image,
  alt,
  type,
  children,
}) => {
  switch (type) {
    case 'image':
      return (
        <div className={styles.gridItemImage}>
          <img src={image} alt={alt} />
        </div>
      )
    case 'text':
      return <div className={styles.gridItemText}>{children}</div>
    default:
      return <div>Something went wrong</div>
  }
}

export default GridItem

GridItem.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
}
