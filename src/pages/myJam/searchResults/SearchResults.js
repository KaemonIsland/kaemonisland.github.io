import React, { Component } from 'react';
import styles from './SearchResults.module.scss';

import TrackList from '../trackList/TrackList';

class SearchResults extends Component {
  render() {
    return (
      <div className={styles.searchResults}>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </div>
    )
  }
}

export default SearchResults;