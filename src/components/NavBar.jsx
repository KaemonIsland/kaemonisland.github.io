import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import styled from 'styled-components'
import FocusLock from 'react-focus-lock'
import { IconLink } from './iconLink/IconLink'
import navBackground from '../assets/images/connectwork.png'
import kaemonProfile from '../assets/images/Portrait.jpg'

const StyledNav = styled.nav`
  width: 30%;
  height: 100%;
  font-size: 2rem;
  color: white;
  border-right: 0.2rem solid white;
  background-image: url(${navBackground});
  position: fixed;
  transition: all 300ms ease-in;
  background-repeat: repeat;
  padding: 0.5rem 0;
  text-align: center;
  box-shadow: 6px 0 12px black;
  left: ${({ isOpen }) => (isOpen ? '0' : '-30%')};
  z-index: 500;
`
const NavContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-gap: 1rem;
`
const NavProfile = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 50%;
  margin: 0 auto;
`

const NavTitle = styled.div`
  & p {
    font-size: 1.25rem;
    font-weight: 600;
  }
  & > p:first-of-type {
    border-bottom: 0.1rem solid white;
  }
`

const NavLink = styled.li`
  font-size: 1.5rem;
  & a {
    cursor: pointer;
    transition: all 200ms linear;
    color: white;
    text-decoration: none;
    width: 100%;
    display: inline-block;
    border-radius: 0.5rem;
    &:focus,
    &:active,
    &:hover {
      color: black;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`

const MediaLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
`

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 100%;
  height: 8rem;
  width: 3rem;
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: white;
  border: .2rem solid white;
  box-shadow: 6px 0 12px black;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms linear;
  &:hover,
  &:active,
  &:focus {
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.light};
    border .2rem solid ${({ theme }) => theme.palette.primary.light}
  }
`

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FocusLock disabled={!isOpen}>
      <StyledNav isOpen={isOpen}>
        <NavContainer id="navbar-menu" role="menu" tabIndex="0">
          <NavTitle>
            <NavProfile>
              <img src={kaemonProfile} alt="Kaemon Lovendahl" />
            </NavProfile>
            <p>Kaemon Lovendahl</p>
            <p>Front End Developer</p>
          </NavTitle>

          <ul>
            <NavLink>
              <a href="localhost:3000">My Jam</a>
            </NavLink>
            <NavLink>
              <a href="localhost:3000">About Me</a>
            </NavLink>
            <NavLink>
              <a
                href="http://makethisgreat.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Make this Great!
              </a>
            </NavLink>
            <NavLink>
              <a
                href="http://roll-player.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Roll Player
              </a>
            </NavLink>
            <NavLink>More Coming Soon!</NavLink>
          </ul>

          <MediaLink>
            <IconLink link="github" />
            <IconLink link="twitter" />
            <IconLink link="linkedin" />
            <IconLink link="email" />
          </MediaLink>
        </NavContainer>

        <NavButton
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          aria-controls="navbar-menu"
        >
          {isOpen ? <FaArrowRight /> : <FaArrowLeft />}
        </NavButton>
      </StyledNav>
    </FocusLock>
  )
}
