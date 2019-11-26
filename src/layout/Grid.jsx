import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledGrid = styled.div(() => ({
  color: 'blue',
}))

export const Grid = ({ children }) => <StyledGrid>{children}</StyledGrid>

Grid.propTypes = {
  children: PropTypes.node,
}
