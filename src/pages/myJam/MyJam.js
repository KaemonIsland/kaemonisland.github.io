import React, { Component } from 'react';
import styles from './MyJam.module.scss';

import SearchBar from '../../components/searchBar/SearchBar';
import SearchResults from './searchResults/SearchResults';
import Playlist from './playlist/Playlist';

import Spotify from '../../utils/Spotify';

class MyJam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'Playlist Title',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    let tracks = this.state.playlistTracks;
    tracks.push(track);

    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    if (this.state.playlistName === ('' || undefined) || this.state.playlistTracks.length === 0) {
      return;
    }

    const trackUris = this.state.playlistTracks.map(track => track.URI);
    Spotify.savePlaylist(this.state.playlistName, trackUris)
      .then(() => {
        this.setState({
          playlistName: 'Playlist Title',
          playlistTracks: []
        });
      });
  }

  search(term) {
    Spotify.search(term)
      .then(searchResults => {
      this.setState({ searchResults: searchResults})
    })
  }

  render() {
    return (
      <div className={styles.layout}>
        <h1 className={styles.title}>My Jam</h1>

        <div className={styles.searchBar}>
          <SearchBar
            placeholder='Enter a Song, Album, or Artist...'
            title='SEARCH'
            onSearch={this.search}
          />
        </div>
        <div className={styles.results}>
          <h1>Results...</h1>
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
            onSave={this.savePlaylist}
          />
        </div>
        <div className={styles.results}>
          <h1>Your Playlist...</h1>
          <Playlist
            defaultValue={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.onRemove}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    )
  }
}

export default MyJam;