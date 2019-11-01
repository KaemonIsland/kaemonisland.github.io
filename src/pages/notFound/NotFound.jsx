import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theVoid from '../../assets/images/undraw_void.png'
import { Image } from '../../elements'

const NotFoundContainer = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NotFound = () => (
  <NotFoundContainer>
    <Image width="20rem" image={theVoid} alt="Lost" alignment="center" />
    <h2>Looks like your lost...</h2>
    <Link to="/">Take me home</Link>
  </NotFoundContainer>
)
