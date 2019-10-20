import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  transition: all 200ms;
  margin: 1rem;
  position: relative;
  border: none;
  cursor: pointer;
  color: white;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border: 0.2rem solid white;
  &:hover,
  &:focus {
    transform: translateY(-0.3rem);
    box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.8);
  }
  &:active {
    outline: none;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.8);
  }
`

export const Button = ({ callBack, title }) => (
  <StyledButton onClick={callBack}>
    {title}
  </StyledButton>
)

Button.propTypes = {
  title: PropTypes.string.isRequired
}
