import React from 'react';
import styles from './ProfileCard.module.scss';
import ToonKaemon from '../../assets/images/KaemonToonZoom.png';

let ProfileCard = () => {
  return (
    <div className={styles.profileCardToonSmall}>
      <img src={ToonKaemon} alt='Kaemon Lovendahl'/>
    </div>
  )
}

export default ProfileCard;