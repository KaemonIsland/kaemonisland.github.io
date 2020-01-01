import React from 'react'
import styled from 'styled-components'
import { Disclosure } from '../../components'

const PersonalityContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow.gray.small};
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  & h5 {
    text-transform: uppercase;
  }
`

const PersonalityItem = styled.li`
  list-style-type: disc;
  margin-left: 2rem;
  line-height: 1.6;
  letter-spacing: 1px;
  font-weight: 300;
  margin-top: 1rem;
`

const personalityItems = [
  {
    title: 'Personality Traits',
    content: [
      'When I set my mind to something, I follow through no matter what gets in my way.',
      "I believe that anything worth doing is worth doing right. I can't help it, I'm a perfectionist.",
      'I face problems head-on. A simple, direct solution is the best path to success.',
      'I am horribly, horribly awkward in social situations.',
    ],
  },
  {
    title: 'Ideals',
    content: [
      "Aspiration - I'm determined to make something of myself.",
      'Creativity - The world is in need of new ideas and bold action.',
      "Sincerity - There's no good in pretending to be something I'm not.",
      'Freedom - Everyone should be free to pursue his or her own livelihood',
      'Free Thinking - Inquiry and curiosity are the pillars of progress',
    ],
  },
  {
    title: 'Bonds',
    content: [
      'I owe my guild a great debt for forging me into the person I am today.',
      'I sold my soul for knowledge. I hope to do great deeds and win it back.',
    ],
  },
  {
    title: 'Flaws',
    content: [
      'I overlook obvious solutions in favor of complicated ones.',
      "I'm never satisfied with what I have - I always want more.",
      'In fact, the world does revolve around me.',
    ],
  },
]

export const Personality = () => (
  <>
    {personalityItems.map(({ title, content }, i) => (
      <PersonalityContainer key={i}>
        <Disclosure title={title}>
          <ul>
            {content.map((text, index) => (
              <PersonalityItem key={index}>{text}</PersonalityItem>
            ))}
          </ul>
        </Disclosure>
      </PersonalityContainer>
    ))}
  </>
)
