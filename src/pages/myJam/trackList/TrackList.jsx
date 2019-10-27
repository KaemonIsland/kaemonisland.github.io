import React from 'react'
import PropTypes from 'prop-types'
import styles from './TrackList.module.scss'
import { Track } from './track/Track'

// prettier-ignore
export const TrackList = ({
  tracks,
  onAdd,
  onRemove,
  isRemoval,
}) => (
  <div className={styles.trackList}>
    {tracks.map(track => (
      <Track
        track={track}
        key={track.id}
        onAdd={onAdd}
        onRemove={onRemove}
        isRemoval={isRemoval}
      />
    ))}
  </div>
)

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isRemoval: PropTypes.func,
}

export default TrackList
