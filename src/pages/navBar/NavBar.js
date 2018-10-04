import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import ProfileCard from '../../components/profileCard/ProfileCard';
import IconLink from '../../components/iconLink/IconLink';

class NavBar extends Component {
  render() {
    return (
      <nav className={styles.navWrap}>
      
        <div className={styles.author}>
          <ProfileCard />

          <p>Kaemon Lovendahl</p>
          <hr />
          <p>Front End Developer</p>
        </div>
        
        <div className={styles.navigation}>
          <h1 className={styles.link}>Recent Work</h1>
          <h1 className={styles.link}>Stage Index</h1>
          <h1 className={styles.link}>Make this (deck) Great!</h1>
          <h1 className={styles.link}>Face It</h1>
          <h1 className={styles.link}>About Me</h1>
        </div>

        <div className={styles.links}>
          <IconLink link='github' />
          <IconLink link='twitter' />
          <IconLink link='linkedin' />
          <IconLink link='email' />
        </div>
      </nav>
    )
  }
}

export default NavBar;