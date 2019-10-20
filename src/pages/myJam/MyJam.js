import React, { useState } from 'react';
import styled from 'styled-components'
import { SearchBar } from '../../components/SearchBar';
import SearchResults from './SearchResults';
import { Playlist } from './Playlist';

import Spotify from '../../utils/Spotify';

const MyJamContainer = styled.section`
  height: 100vh;
  background: linear-gradient(to bottom,
    ${({ theme }) => theme.palette.primary.light} 20%,
    ${({ theme }) => theme.palette.primary.main} 80%
  );
  text-align: center;
  overflow-y: scroll;
`

const ResultsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`

export const MyJam = () => {
  let [results, setResults] = useState([]);
  let [playlistName, setPlaylistName] = useState('New Playlist')
  let [playlistTracks, setPlaylistTracks] = useState([])

  let addTrack = track => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track])
    }
  }

  let removeTrack = ({ id }) => {
    setPlaylistTracks(playlistTracks.filter(currentTrack => currentTrack.id !== id))
  }

  let updatePlaylistName = name => setPlaylistName(name);

  let savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.URI);
    Spotify.savePlaylist(playlistName, trackUris)
    setPlaylistName('New Playlist')
    setPlaylistTracks([])
  }

  let search = term => {
    Spotify.search(term).then(searchResults => {
      setResults([...searchResults]);
    });
  }

  return (
    <MyJamContainer>
      <h2>My Jam</h2>
      <SearchBar
        placeholder='Enter a Song, Album, or Artist...'
        title='SEARCH'
        onSearch={search}
      />
      <ResultsContainer>
        <SearchResults
          searchResults={results}
          onAdd={addTrack}
          onSave={savePlaylist}
        />
        <Playlist
          value={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
      </ResultsContainer>
    </MyJamContainer>
  )
}
