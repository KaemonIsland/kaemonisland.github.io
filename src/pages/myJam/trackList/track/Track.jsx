import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TrackContainer = styled.div`
  display: flex;
  margin: 0 0.5rem;
  justify-content: space-between;
  align-items: center;
  & > button {
    background-color: white;
    border: none;
    cursor: pointer;
  }
`

const TrackInfo = styled.div`
  width: 85%;
  min-width: 0;
  text-align: left;
  & * {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & h5 {
    font-size: 1.1rem;
  }
`

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
    <TrackContainer>
      <TrackInfo>
        <h5 title={track.name}>{track.name}</h5>
        <p>
          {track.artist}
          {' | '}
          <em>{track.album}</em>
        </p>
      </TrackInfo>
      {renderAction()}
    </TrackContainer>
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
