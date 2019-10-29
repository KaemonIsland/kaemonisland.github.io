import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Input } from '../elements'

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 1.5rem;
`

export const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('')

  const search = () => {
    onSearch(term)
    setTerm('')
  }

  const handleTermChange = ({ value }) => setTerm(value)

  return (
    <StyledSearch>
      <Input
        placeholder="Enter a Song, Album, or Artist"
        value={term}
        callback={handleTermChange}
        shadowColor="primary"
        width="20rem"
      />
      <Button callback={search} title="SEARCH" />
    </StyledSearch>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
}
