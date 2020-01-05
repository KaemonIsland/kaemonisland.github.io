import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Image } from '../elements'

const FallbackContainer = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  & figure {
    margin-bottom: 1.5rem;
  }
  & h4 {
    margin-bottom: 1.5rem;
  }
`

export const Fallback = ({ image, imageAlt, message, children }) => (
  <FallbackContainer>
    <Image width="20rem" image={image} alt={imageAlt} />
    <h4>{message}</h4>
    {children}
  </FallbackContainer>
)

Fallback.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node,
}
