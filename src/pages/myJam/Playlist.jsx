import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TrackList } from './trackList/TrackList'
import { Button, Input } from '../../elements'

const PlaylistContainer = styled.div`
  position: relative;
  padding: 0.5rem;
  margin: 0 auto;
  width: 40%;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.primary.medium};
`

export const Playlist = ({
  onNameChange,
  playlistTracks,
  onRemove,
  onSave,
  playlist = '',
}) => {
  const handleNameChange = ({ value }) => {
    onNameChange(value)
  }

  return (
    <PlaylistContainer>
      <Input
        placeholder="Enter Playlist Title"
        value={playlist}
        callback={handleNameChange}
      />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval />
      <Button callback={onSave} title="SAVE TO SPOTIFY" />
    </PlaylistContainer>
  )
}

Playlist.propTypes = {
  onNameChange: PropTypes.func,
  playlistTracks: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
  onSave: PropTypes.func,
  playlist: PropTypes.string,
}
