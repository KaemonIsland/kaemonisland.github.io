import React from 'react';
import styles from './ProfileCard.module.scss';
import ToonKaemon from '../../assets/images/KaemonToonZoom.png';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.profileCardToonSmall}>
        <img src={ToonKaemon} alt='Kaemon Lovendahl'/>
      </div>
    )
  }
}

export default ProfileCard;