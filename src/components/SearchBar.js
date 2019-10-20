import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input } from '../elements'

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const SearchBar = ({ onSearch }) => {
  let [term, setTerm] = useState('')

  let search = () => onSearch(term)

  let handleTermChange = ({ value }) => setTerm(value);

  return (
    <StyledSearch>
      <Input
        placeholder="Enter a Song, Album, or Artist"
        value={term}
        callback={handleTermChange}
      />
      <Button
        onClick={search}
        title="SEARCH"
      />
    </StyledSearch>
  )
}

export default SearchBar;