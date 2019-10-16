import React from 'react';
import PropTypes from 'prop-types';
import { FaGithubSquare, FaTwitterSquare, FaLinkedin, FaEnvelope, FaBomb } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styles from './IconLink.module.scss'

let links = {
  github: 'https://github.com/KaemonIsland',
  twitter: 'https://twitter.com/KaemonIsland?lang=en',
  linkedin: 'https://www.linkedin.com/in/kaemon-lovendahl-08150564/',
  email: 'mailto:kaemonlovendahl14@hotmail.com'
}

class IconLink extends React.Component {

  icon(iconType) {
    switch (iconType) {
      case "github":
        return <FaGithubSquare />;
      case "twitter":
        return <FaTwitterSquare />;
      case "linkedin":
        return <FaLinkedin />;
      case "email":
        return <FaEnvelope />;
      default:
        return <FaBomb />;
    }
  }

  render() {
    let link = this.props.link;

    return (
      <div className={styles.link} >
        <a href={links[link]} target={link === 'email' ? '_self' : '_blank'}>
          <IconContext.Provider value={{ color: 'white', size: '5rem'}}>
            <div>
              {this.icon(link)}
            </div>
          </IconContext.Provider>
        </a>
      </div>
    )
  }
}

IconLink.propTypes = {
  link: PropTypes.string.isRequired
}

export default IconLink