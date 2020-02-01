import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'warlock-ui'
import { Input } from '../../elements'

const StyledSearch = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 1.5rem;
`

export const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('')

  const search = e => {
    e.preventDefault()
    if (term) {
      onSearch(term)
      setTerm('')
    }
  }

  const handleTermChange = ({ value }) => setTerm(value)

  return (
    <StyledSearch>
      <form onSubmit={search}>
        <Input
          type="search"
          placeholder="Enter a Song, Album, or Artist"
          value={term}
          callback={handleTermChange}
          shadowColor="primary"
          width="20rem"
        />
        <Button type="submit" title="SEARCH" />
      </form>
    </StyledSearch>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
}
