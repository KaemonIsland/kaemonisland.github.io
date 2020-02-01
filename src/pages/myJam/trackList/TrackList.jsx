import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Track } from './track/Track'

const TrackListContainer = styled.div`
  height: 15rem;
  max-width: 45rem;
  width: 90vw;
  min-width: 8rem;
  overflow-y: scroll;
  scrollbar-width: none;
  & div:not(:last-child) {
    margin-bottom: 1rem;
  }
`

// prettier-ignore
export const TrackList = ({
  tracks,
  onAdd,
  onRemove,
  isRemoval,
}) => (
  <TrackListContainer>
    {tracks.map(track => (
      <Track
        track={track}
        key={track.id}
        onAdd={onAdd}
        onRemove={onRemove}
        isRemoval={isRemoval}
      />
    ))}
  </TrackListContainer>
)

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isRemoval: PropTypes.func,
}
