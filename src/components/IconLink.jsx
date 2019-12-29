import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope,
  FaBomb,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'

const StyledLink = styled.div`
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 200ms;

  &:hover,
  &:focus {
    box-shadow: 0 0 4rem rgba(255, 255, 255, 0.5);
    transform: translateY(-0.3rem);
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0 3rem rgba(255, 255, 255, 0.3);
  }
`

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
    <StyledLink>
      <a href={links[link]} target={link === 'email' ? '_self' : '_blank'}>
        <IconContext.Provider value={{ color: 'white', size: '40' }}>
          {icon}
        </IconContext.Provider>
      </a>
    </StyledLink>
  )
}

IconLink.propTypes = {
  link: PropTypes.string.isRequired,
}
