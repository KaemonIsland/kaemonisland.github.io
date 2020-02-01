import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TrackList } from './trackList/TrackList'

const SearchContainer = styled.div`
  padding: 0.5rem;
  margin: 0 1.5rem;
  width: 40%;
  min-width: 20rem;
  max-height: 30rem;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.primary.medium};
  & > h3 {
    font-size: 1.5rem;
    border-bottom: 2px solid hsl(0, 0%, 55%);
  }
`

export const SearchResults = ({ searchResults, onAdd }) => (
  <>
    <SearchContainer>
      <h3>Search Results</h3>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </SearchContainer>
  </>
)

export default SearchResults

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func,
}
