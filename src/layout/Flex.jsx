import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// prettier-ignore
const StyledFlex = styled.div(({
  direction,
  justifyContent,
  alignItems,
  flexWrap,
  alignContent,
}) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: direction,
  justifyContent,
  alignItems,
  flexWrap,
  alignContent,
}))

export class Flex extends React.Component {
  render() {
    const {
      direction,
      justifyContent,
      alignItems,
      flexWrap,
      alignContent,
      children,
    } = this.props

    const flexStyles = {
      direction,
      justifyContent,
      alignItems,
      flexWrap,
      alignContent,
    }
    return <StyledFlex {...flexStyles}>{children}</StyledFlex>
  }
}

Flex.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexWrap: PropTypes.string,
  alignContent: PropTypes.string,
}

Flex.defaultProps = {
  direction: 'row',
  justifyContent: 'start',
  alignItems: 'start',
  flexWrap: 'nowrap',
  alignContent: '',
}

// prettier-ignore
const StyledFlexItem = styled.div(({
  order,
  grow,
  shrink,
  basis,
  flex,
  alignSelf,
}) => ({
  order,
  grow,
  shrink,
  basis,
  flex,
  alignSelf,
}))

// prettier-ignore
Flex.Item = ({
  order,
  grow = 0,
  shrink = 0,
  basis,
  alignSelf,
  children,
}) => {
  const flexItemStyles = {
    order,
    grow,
    shrink,
    basis,
    alignSelf,
  }
  return <StyledFlexItem {...flexItemStyles}>{children}</StyledFlexItem>
}

Flex.Item.propTypes = {
  children: PropTypes.node,
  order: PropTypes.string,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.string,
  alignSelf: PropTypes.string,
}
