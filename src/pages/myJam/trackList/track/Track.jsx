import React from 'react'
import PropTypes from 'prop-types'
import styles from './Track.module.scss'

// prettier-ignore
export const Track = ({
  track,
  onAdd,
  onRemove,
  isRemoval,
}) => {
  const addTrack = () => {
    onAdd(track)
  }

  const removeTrack = () => {
    onRemove(track)
  }

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button type="button" onClick={removeTrack}>
          -
        </button>
      )
    }
    return (
      <button type="button" onClick={addTrack}>
        +
      </button>
    )
  }

  return (
    <div className={styles.track}>
      <div className={styles.trackInfo}>
        <h3>{track.name}</h3>
        <p>
          {track.artist}
          {' | '}
          <em>{track.album}</em>
        </p>
      </div>
      {renderAction()}
    </div>
  )
}

Track.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
  }),
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isRemoval: PropTypes.func,
}

export default Track
