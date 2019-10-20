import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 20rem;
  border: .1rem solid white;
  border: 1px solid black;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  transition: all 200ms linear;
  &:focus,
  &:active {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 .3rem .6rem rgba(0, 0, 0, .8);
    transform: translateY(-3px);
  }
`

export const Input = ({ value, callback, placeholder }) => (
  <StyledInput
    value={value}
    onChange={({ target }) => callback(target)}
    placeholder={placeholder}
  />
)