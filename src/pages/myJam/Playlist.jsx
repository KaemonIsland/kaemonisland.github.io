import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TrackList } from './trackList/TrackList'
import { Button } from 'warlock-ui'
import { Input } from '../../elements'

const PlaylistContainer = styled.div`
  padding: 0.5rem;
  min-width: 20rem;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border: 2px solid black;
  border-radius: 0.5rem;
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
    <div>
      <Input
        placeholder="Enter Playlist Title"
        value={playlist}
        callback={handleNameChange}
      />
      <Button callback={onSave} title="SAVE TO SPOTIFY" />
      <PlaylistContainer>
        <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval />
      </PlaylistContainer>
    </div>
  )
}

Playlist.propTypes = {
  onNameChange: PropTypes.func,
  playlistTracks: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
  onSave: PropTypes.func,
  playlist: PropTypes.string,
}
