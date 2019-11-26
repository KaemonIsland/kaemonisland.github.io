import React from 'react'
import styled from 'styled-components'
import { Container } from '../../layout'

const SpellsContainer = styled.div`
  color: blue;
`

export const Spells = () => {
  const name = 'Spells'
  return (
    <SpellsContainer>
      <Container border width="20%">
        <h1>{name}</h1>
      </Container>
    </SpellsContainer>
  )
}
