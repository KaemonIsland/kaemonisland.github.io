import React from 'react'
import styled from 'styled-components'

const SpellsContainer = styled.div`
  color: blue;
`

export const Spells = () => {
  const name = 'Spells'
  return (
    <SpellsContainer>
      <h1>{name}</h1>
    </SpellsContainer>
  )
}
