import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageContainer = styled.figure(({ theme, height, width }) => ({
  maxWidth: width,
  height,
  border: '3px solid transparent',
  borderRadius: '1rem',
  overflow: 'hidden',
  boxShadow: theme.shadow.gray.medium,
}))

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`
// prettier-ignore
export const Image = ({
  image,
  alt,
  width,
  height,
}) => {
  const styles = {
    width,
    height,
  }
  return (
    <ImageContainer {...styles}>
      <StyledImage src={image} alt={alt} />
    </ImageContainer>
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
}
