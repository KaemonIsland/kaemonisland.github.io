import React from 'react'
import styled from 'styled-components'
import { Name } from './Name'
import { Stats } from './Stats'
import { Personality } from './Personality'

const CharacterSheetContainer = styled.section`
  max-width: 60rem;
  margin: 1rem auto;
  padding: 0.5rem;
  border 1px solid black;
  box-shadow: ${({ theme }) => theme.shadow.gray.medium};
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(14rem, 1fr));
  grid-gap: 1rem;
  border-radius: 0.5rem;
`
const Spells = styled.div`
  background-color: green;
`
const Traits = styled.div`
  background-color: purple;
`
const Languages = styled.div`
  background-color: lightblue;
`
const Equipment = styled.div`
  background-color: lightgreen;
`

export const CharacterSheet = () => (
  <CharacterSheetContainer>
    <Name />
    <Stats />
    <Personality />
    <Spells>Spells</Spells>
    <Traits>Traits</Traits>
    <Languages>Languages</Languages>
    <Equipment>Equipment</Equipment>
  </CharacterSheetContainer>
)
