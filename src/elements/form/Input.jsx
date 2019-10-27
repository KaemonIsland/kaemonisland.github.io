import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input(({ theme }) => ({
  width: '20rem',
  border: '1px solid black',
  padding: '0 0.5rem',
  borderRadius: '0.5rem',
  fontSize: '1.2rem',
  transition: 'all 200ms linear',
  '&:focus, &:active': {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadow.gray.small,
    transform: 'translateY(-3px)',
  },
}))

export const Input = ({ value, callback, placeholder = '' }) => (
  <StyledInput
    value={value}
    onChange={({ target }) => callback(target)}
    placeholder={placeholder}
  />
)

Input.propTypes = {
  value: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
  callback: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}
