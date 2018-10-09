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
      searchResults: '',
      playlistName: 'New Playlist',
      playlistTracks: []
    }
  }
  render() {
    return (
      <div className={styles.layout}>
        <h1 className={styles.title}>My Jam</h1>

        <div className={styles.searchBar}>
          <SearchBar />
        </div>

        <Playlist />
        <SearchResults />
      </div>
    )
  }
}

export default MyJam;