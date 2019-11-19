import React from 'react'
import styled from 'styled-components'

const PersonalityContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: white;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow.gray.small};
  margin: 1rem;
  padding: 1rem;
  & h5 {
    text-transform: uppercase;
  }
`

const PersonalityItem = styled.li`
  list-style-type: upper-roman;
  margin-left: 2rem;
  line-height: 1.8;
  letter-spacing: 2px;
  font-weight: 300;
`

export const Personality = () => (
  <PersonalityContainer>
    <h5>Personality Traits</h5>
    <ul>
      <PersonalityItem>
        When I set my mind to something, I follow through no matter what gets in
        my way.
      </PersonalityItem>
      <PersonalityItem>
        I believe that anything worth doing is worth doing right. I can&apos;t
        help it, I&apos;m a perfectionist.
      </PersonalityItem>
      <PersonalityItem>
        I face problems head-on. A simple, direct solution is the best path to
        success.
      </PersonalityItem>
      <PersonalityItem>
        I am horribly, horribly awkward in social situations.
      </PersonalityItem>
    </ul>
  </PersonalityContainer>
)
