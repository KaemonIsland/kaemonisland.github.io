import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TrackList } from './trackList/TrackList'

const SearchContainer = styled.div`
  margin-bottom: 2.5rem;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border: 2px solid black;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow.primary.medium};
`

export const SearchResults = ({ searchResults, onAdd }) => (
  <>
    <h3>Results</h3>
    <SearchContainer>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </SearchContainer>
  </>
)

export default SearchResults

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func,
}
