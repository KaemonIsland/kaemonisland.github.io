import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import ProfileCard from '../../components/profileCard/ProfileCard';
import IconLink from '../../components/iconLink/IconLink';
import { IconContext } from 'react-icons'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }

    this.showNav = this.showNav.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  showNav() {
    let toggle = this.state.visible === false ? true : false;
    this.setState({ visible: toggle });
  }

  handlePageChange(e) {
    this.props.changePage(e.target.innerHTML);
  }

  render() {
    let { visible } = this.state;
    let navVisible;
    if (visible) {
      navVisible = 'navVisible';
    } else {
      navVisible = 'navHidden';
    }


    return (
      <nav className={styles[navVisible]}>
        <div className={styles.navBar}>
          <div className={styles.author}>
            <ProfileCard />

            <p>Kaemon Lovendahl</p>
            <hr />
            <p>Front End Developer</p>
          </div>
          
          <div onClick={this.handlePageChange} className={styles.navigation}>
            <h1 className={styles.link}>My Jam</h1>
            <h1 className={styles.link}>About Me</h1>
            <h1 className={styles.link}>More Coming Soon!</h1>
          </div>

          <div className={styles.links}>
            <IconLink link='github' />
            <IconLink link='twitter' />
            <IconLink link='linkedin' />
            <IconLink link='email' />
          </div>
        </div>

        <div onClick={this.showNav} className={styles.toggle}>
          <IconContext.Provider value={{ color: 'white', size: '2rem'}}>
            <div>
              {visible === false ? <FaArrowRight /> : <FaArrowLeft />}
            </div>
          </IconContext.Provider>
        </div>
      </nav>
    )
  }
}

export default NavBar;