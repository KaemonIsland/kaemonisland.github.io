import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TrackList } from './trackList/TrackList'

const SeachContainer = styled.div`
  padding: 0.5rem;
  margin: 0 auto;
  width: 40%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 0.1rem solid black;
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  scrollbar-width: none;
`

export const SearchResults = ({ searchResults, onAdd }) => (
  <SeachContainer>
    <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
  </SeachContainer>
)

export default SearchResults

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func,
}
