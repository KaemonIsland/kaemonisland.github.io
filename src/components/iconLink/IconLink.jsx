import React from 'react'
import PropTypes from 'prop-types'
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope,
  FaBomb,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import styles from './IconLink.module.scss'

const links = {
  github: 'https://github.com/KaemonIsland',
  twitter: 'https://twitter.com/KaemonIsland?lang=en',
  linkedin: 'https://www.linkedin.com/in/kaemon-lovendahl-08150564/',
  email: 'mailto:kaemonlovendahl14@hotmail.com',
}

export const IconLink = ({ link }) => {
  let icon

  switch (link) {
    case 'github':
      icon = <FaGithubSquare />
      break
    case 'twitter':
      icon = <FaTwitterSquare />
      break
    case 'linkedin':
      icon = <FaLinkedin />
      break
    case 'email':
      icon = <FaEnvelope />
      break
    default:
      icon = <FaBomb />
      break
  }

  return (
    <div className={styles.link}>
      <a href={links[link]} target={link === 'email' ? '_self' : '_blank'}>
        <IconContext.Provider value={{ color: 'white', size: '40' }}>
          <div>{icon}</div>
        </IconContext.Provider>
      </a>
    </div>
  )
}

IconLink.propTypes = {
  link: PropTypes.string.isRequired,
}

export default IconLink
