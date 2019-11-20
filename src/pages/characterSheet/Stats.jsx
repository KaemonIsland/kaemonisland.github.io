import React from 'react'
import styled from 'styled-components'

const StatsContainer = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: repeat(auto-fill, minmax(10rem, 1fr));
  text-align: center;
  grid-gap: 0.5rem;
  align-items: center;
  justify-items: center;
`

const AbilityContainer = styled.div`
  width: 8rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  position: relative;
  margin-bottom: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow.gray.small};
`

const AbilityName = styled.div`
  text-transform: uppercase;
  border-bottom: 1px dotted black;
`

const AbilityScore = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
`

const AbilityModifier = styled.div`
  background-color: white;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 2rem/1.5rem;
  width: 3.5rem;
  margin: 0 auto;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
`

const statsScores = [
  { name: 'Strength', score: '10', modifier: '0' },
  { name: 'Dexterity', score: '8', modifier: '- 1' },
  { name: 'Constitution', score: '15', modifier: '+ 1' },
  { name: 'Intelligence', score: '18', modifier: '+ 3' },
  { name: 'Wisdom', score: '14', modifier: '+ 2' },
  { name: 'Charisma', score: '15', modifier: '+ 2' },
]

export const Stats = () => (
  <StatsContainer>
    {statsScores.map(({ name, score, modifier }) => (
      <AbilityContainer>
        <AbilityName>{name}</AbilityName>
        <AbilityScore>{score}</AbilityScore>
        <AbilityModifier>{modifier}</AbilityModifier>
      </AbilityContainer>
    ))}
  </StatsContainer>
)
