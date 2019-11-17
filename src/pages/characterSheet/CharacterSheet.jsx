import React from 'react'
import styled from 'styled-components'
import { CharacterName } from './CharacterName'

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

const Stats = styled.div`
  background-color: red;
`

const Health = styled.div`
  background-color: yellow;
`

const Personality = styled.div`
  background-color: orange;
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
    <CharacterName />
    <Stats>Stats</Stats>
    <Health>Health</Health>
    <Personality>Personality</Personality>
    <Spells>Spells</Spells>
    <Traits>Traits</Traits>
    <Languages>Languages</Languages>
    <Equipment>Equipment</Equipment>
  </CharacterSheetContainer>
)
