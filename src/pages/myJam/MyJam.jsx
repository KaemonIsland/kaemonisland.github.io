import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'
import { SearchResults } from './SearchResults'
import { Playlist } from './Playlist'

import Spotify from '../../utils/Spotify'

const MyJamContainer = styled.section`
  height: 100%;
  padding-bottom: 1rem;
  color: black;
  background-color: white;
  text-align: center;
  overflow-y: scroll;
  scrollbar-width: none;
  & h2 {
    margin: 0 2rem;
    border-bottom: 3px solid black;
  }
`

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const MyJam = () => {
  const [results, setResults] = useState([])
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])

  /**
   * Sorts an array of tracks by name
   * @param {object} track - array of track objects
   */
  const sortTracks = (trackA, trackB) => {
    return trackA.name.toUpperCase() > trackB.name.toUpperCase() ? 1 : -1
  }

  /**
   * Returns true if a track is within the array
   * @param {array} trackArr - list of tracks to search
   * @param {integer} trackId - track id to find
   */
  const isTrackPresent = (trackArr, trackId) =>
    trackArr.find(track => track.id === trackId)

  const addTrack = track => {
    if (!isTrackPresent(playlistTracks, track.id)) {
      setPlaylistTracks(playlistTracks => [...playlistTracks, track])
      setResults(currentResults =>
        currentResults
          .filter(resultsTrack => resultsTrack.id !== track.id)
          .sort(sortTracks)
      )
    }
  }

  const removeTrack = track => {
    if (isTrackPresent(playlistTracks, track.id)) {
      setPlaylistTracks(playlistTracks =>
        playlistTracks.filter(currentTrack => currentTrack.id !== track.id)
      )
      setResults(results => [...results, track].sort(sortTracks))
    }
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
      setResults([...searchResults].sort(sortTracks))
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
        <SearchResults searchResults={results} onAdd={addTrack} />
        <Playlist
          playlist={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
      </ResultsContainer>
    </MyJamContainer>
  )
}
