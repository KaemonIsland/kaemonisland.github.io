import React from 'react';
import styled from 'styled-components'
import TrackList from './trackList/TrackList';
import { Button, Input } from '../../elements';

const PlaylistContainer = styled.div`
  position: relative;
  padding: 0.5rem;
  margin: 0 auto;
  width: 40%;
  background-color: white;
  border: .1rem solid black;
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, .5);
`

export const Playlist = ({onNameChange, playlistTracks, onRemove, onSave, playlist}) => {

  let handleNameChange = ({ value }) => {
    onNameChange(value);
  }

  return (
    <PlaylistContainer>
      <Input
        placeholder='Enter Playlist Title'
        value={playlist}
        callback={handleNameChange}
      />
      <TrackList
      tracks={playlistTracks}
      onRemove={onRemove}
      isRemoval={true}
      />
      <Button
        onClick={onSave}
        title="SAVE TO SPOTIFY"
      />
    </PlaylistContainer>
  )
}