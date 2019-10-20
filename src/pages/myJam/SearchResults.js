import React, { Component } from 'react'
import styled from 'styled-components'
import TrackList from './trackList/TrackList'

const SeachContainer = styled.div`
  padding: 0.5rem;
  margin: 0 auto;
  width: 40%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: .1rem solid black;
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, .5);
  overflow-y: scroll;
  scrollbar-width: none;
`

class SearchResults extends Component {
  render() {
    return (
      <SeachContainer>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </SeachContainer>
    )
  }
}

export default SearchResults;