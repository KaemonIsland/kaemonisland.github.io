import React, { Component } from 'react';
import styles from './TrackList.module.scss';

import Track from './track/Track';

class TrackList extends Component {
  render() {
    return (
      <div className={styles.trackList}>
        {this.props.tracks.map(track => {
          return <Track
            track={track}
            key={track.id}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
          />;
        })}
      </div>
    )
  }
}

export default TrackList;