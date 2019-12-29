import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../layout/Flex'
import foggyWoods from '../../assets/images/annie-spratt-fog-unsplash.jpg'

const Background = styled.div`
  background-image: url("${foggyWoods}");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  margin: 0 -1rem;
  width: 100vw;
  height: 100vh;
`

const InnerBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  width: 100vw;
  height: 100vh;
  position: relative;
`

const BackgroundCredit = styled.div`
  position: absolute;
  padding: 0.5rem;
  bottom: 0;
  right: 0;
  color: white;
  font-size: 0.8rem;
`

const Banner = styled.h1`
  color: white;
  font-size: 3.5rem;
  font-weight: 300;
`

const Title = styled.h2`
  color: white;
  font-weight: 300;
  font-size: 2rem;
`

export const Home = () => {
  return (
    <Background>
      <InnerBackground>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Flex.Item>
            <Banner>I am Kaemon Lovendahl</Banner>
          </Flex.Item>
          <Flex.Item>
            <Title>I like to make websites</Title>
          </Flex.Item>
        </Flex>
        <BackgroundCredit>
          <em>Background by Annie Spratt</em>
        </BackgroundCredit>
      </InnerBackground>
    </Background>
  )
}
