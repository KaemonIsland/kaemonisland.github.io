import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #111;
  background-size: cover;
  margin: 0 -1rem;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Header = styled.h1`
  color: white;
  font-size: 3.5rem;
  font-weight: 500;
  text-align: center;
  padding: 2rem 0;
`

const StyledAbout = styled.p`
  color: white;
  font-size: 1.4rem;
`

const StyledLink = styled.a`
  transition: all 300ms linear;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.palette.primary.light};
    text-decoration: none;
  }
`

export const AboutMe = () => {
  return (
    <Background>
      <Container>
        <Header>About Me</Header>
        <StyledAbout>Hello, I&apos;m Kaemon Lovendahl.</StyledAbout>
        <br />
        <StyledAbout>
          I&apos;m a self taught front end web developer at Deseret Book. I love
          working on projects that are neat, ambitious, or compelling. I began
          learning web development on my own in late 2016 and over the course of
          2 years of trial and error I was able to land my first job. Now, I
          spend my time upgrading and improving my skill set. I&apos;ve also
          created a package to help setup a workflow that uses git commit hooks,{' '}
          <StyledLink
            href="https://www.npmjs.com/package/warlock-config"
            target="_blank"
          >
            warlock-config
          </StyledLink>
          .
        </StyledAbout>
        <br />
        <StyledAbout>
          When I&apos;m not working on code you can find me spending time with
          my family or engaging in my favorite hobbies. My hobbies include
          gaming,{' '}
          <StyledLink href="https://dnd.wizards.com/" target="_blank">
            Dungeons and Dragons
          </StyledLink>
          , Magic: The Gathering, and various Tabletop games. My wife and I are
          big{' '}
          <StyledLink href="https://www.bungie.net/" target="_blank">
            Destiny
          </StyledLink>{' '}
          fans. (My wife mains a Titan and I&apos;m a Warlock)
        </StyledAbout>
        <br />
        <StyledAbout>
          Contact me if you would like to work on a project together or just
          want to chat.
        </StyledAbout>
      </Container>
    </Background>
  )
}
