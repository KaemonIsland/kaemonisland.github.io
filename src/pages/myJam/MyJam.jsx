import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchBar } from '../../components/SearchBar'
import { SearchResults } from './SearchResults'
import { Playlist } from './Playlist'

import Spotify from '../../utils/Spotify'

const MyJamContainer = styled.section`
  height: 100vh;
  color: black;
  background-color: white;
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
  const [results, setResults] = useState([])
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])

  const addTrack = track => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track])
    }
  }

  const removeTrack = ({ id }) => {
    // prettier-ignore
    setPlaylistTracks(
      playlistTracks
        .filter(currentTrack => currentTrack.id !== id),
    )
  }

  const updatePlaylistName = name => setPlaylistName(name)

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.URI)
    Spotify.savePlaylist(playlistName, trackUris)
    setPlaylistName('New Playlist')
    setPlaylistTracks([])
  }

  const search = term => {
    Spotify.search(term).then(searchResults => {
      setResults([...searchResults])
    })
  }

  return (
    <MyJamContainer>
      <h2>My Jam</h2>
      <SearchBar
        placeholder="Enter a Song, Album, or Artist..."
        title="SEARCH"
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
