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
      <div>
        <div className={styles.wrap}>
          <input
            className={styles.searchBar}
            placeholder='Enter Playlist Title...'
            value={this.props.value}
            onChange={this.handleNameChange}
          />
          <Button
            onClick={this.props.onSave}
            title="SAVE TO SPOTIFY"
          />
        </div>
        <div className={styles.playlist}>
          <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
          />
        </div>
      </div>
    )
  }
}

export default Playlist;