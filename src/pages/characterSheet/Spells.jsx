import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from '../../layout'

const SpellsContainer = styled.div`
  color: blue;
`

export const Spells = () => {
  const name = 'Spells'
  return (
    <SpellsContainer>
      <Container border height="50vh">
        <Flex justifyContent="space-evenly" alignItems="center">
          <Flex.Item>
            <h4>{name}</h4>
          </Flex.Item>
          <Flex.Item>
            <h4>{name}</h4>
          </Flex.Item>
          <Flex.Item>
            <h4>{name}</h4>
          </Flex.Item>
        </Flex>
      </Container>
    </SpellsContainer>
  )
}
