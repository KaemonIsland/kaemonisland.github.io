import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input(({ theme, shadowColor, width }) => ({
  width,
  maxWidth: '100%',
  border: '1px solid black',
  padding: '0 0.5rem',
  borderRadius: '0.5rem',
  fontSize: '1.2rem',
  transition: 'all 200ms linear',
  '&:focus, &:active': {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadow[shadowColor].small,
    transform: 'translateY(-3px)',
  },
}))

// prettier-ignore
export const Input = ({
  value,
  callback,
  placeholder = '',
  shadowColor = 'gray',
  width,
  ...props
}) => {
  const inputStyles = {
    width,
    shadowColor,
  }
  return (
    <StyledInput
      value={value}
      onChange={({ target }) => callback(target)}
      placeholder={placeholder}
      {...props}
      {...inputStyles}
    />
  )
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  callback: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  shadowColor: PropTypes.oneOf(['gray', 'primary']),
  width: PropTypes.number,
}
