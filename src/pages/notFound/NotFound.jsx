import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theVoid from '../../assets/images/undraw_void.png'
import { Image } from '../../elements'

const NotFoundContainer = styled.section`
  text-align: center;
  display: grid;
  grid-template-rows: 20rem 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
  height: 90vh;
  font-size: 1rem;
`

export const NotFound = () => (
  <NotFoundContainer>
    <Image width="20rem" image={theVoid} alt="Lost" alignment="center" />
    <h3>How&apos;d you get here?</h3>
    <Link to="/">Take me home</Link>
  </NotFoundContainer>
)
