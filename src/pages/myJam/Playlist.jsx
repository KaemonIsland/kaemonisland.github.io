import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TrackList from './trackList/TrackList'
import { Button, Input } from '../../elements'

const PlaylistContainer = styled.div`
  position: relative;
  padding: 0.5rem;
  margin: 0 auto;
  width: 40%;
  background-color: white;
  border: 0.1rem solid black;
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);
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
      <Button onClick={onSave} title="SAVE TO SPOTIFY" />
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
