import React, { Component } from 'react';
import styles from './Playlist.module.scss';

import TrackList from '../trackList/TrackList';
import Button from '../../../components/button/Button';

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className={styles.playlist}>
        <input
          className={styles.searchBar}
          defaultValue={this.props.defaultValue}
          onChange={this.handleNameChange}
        />
        <TrackList
        tracks={this.props.playlistTracks}
        onRemove={this.props.onRemove}
        isRemoval={true}
        />
        <Button
          onClick={this.props.onSave}
          title="SAVE TO SPOTIFY"
        />
      </div>
    )
  }
}

export default Playlist;