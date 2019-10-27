import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button(({ theme, shadowColor }) => ({
  fontSize: '1.1rem',
  fontWeight: 'bold',
  padding: '0.5rem 2rem',
  borderRadius: '0.5rem',
  transition: 'all 200ms',
  margin: '1rem',
  position: 'relative',
  cursor: 'pointer',
  color: 'black',
  border: '1px solid black',
  backgroundColor: 'white',
  '&:hover, &:focus': {
    transform: 'translateY(-0.3rem)',
    boxShadow: theme.shadow[shadowColor].medium,
  },
  '&:active': {
    outline: 'none',
    transform: 'translateY(-0.1rem)',
    boxShadow: theme.shadow[shadowColor].small,
  },
}))

export const Button = ({ callback, title, shadowColor = 'primary' }) => (
  <StyledButton onClick={callback} shadowColor={shadowColor}>
    {title}
  </StyledButton>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  shadowColor: PropTypes.oneOf(['gray', 'primary']),
}
