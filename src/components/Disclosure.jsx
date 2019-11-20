import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DisclosureContainer = styled.div`
  position: relative;
  transition: all 300ms ease-in-out;
`

const DisclosureButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  overflow: hidden;
`

const DisclosureContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

export const Disclosure = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DisclosureContainer>
      <DisclosureButton
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="disclosure-button"
      >
        {title}
      </DisclosureButton>
      <DisclosureContent id="disclosure-button" isOpen={isOpen}>
        {children}
      </DisclosureContent>
    </DisclosureContainer>
  )
}

Disclosure.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
