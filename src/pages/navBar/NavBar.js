import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import ProfileCard from '../../components/profileCard/ProfileCard';

class NavBar extends Component {
  render() {
    return (
      <nav className={styles.navWrap}>
        <ProfileCard />
      </nav>
    )
  }
}

export default NavBar;