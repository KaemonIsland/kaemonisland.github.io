import React, { Component } from 'react';
import styles from './Track.module.scss';

class Track extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <div className={styles.trackAction} onClick={this.removeTrack}>-</div>;
    } else {
      return <div className={styles.trackAction} onClick={this.addTrack}>+</div>;
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className={styles.track}>
        <div className={styles.trackInfo}>
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | <em>{this.props.track.album}</em></p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
}

export default Track;