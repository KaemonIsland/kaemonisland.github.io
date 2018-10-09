import React, { Component } from 'react';
import styles from './SearchBar.module.scss';
import Button from '../button/Button';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    return (
      <div className={styles.searchBar}>
        <input placeholder='Enter a Song, Album, or Artist...'
          onChange={this.handleTermChange} />
        <Button onClick={this.search}
                title='SEARCH'/>
      </div>
    )
  }
}

export default SearchBar;