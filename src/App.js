import React, { Component } from 'react';
import './App.scss';

import NavBar from './pages/navBar/NavBar';
import AboutMe from './pages/aboutMe/AboutMe';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'about me'
    }
  }


  render() {
    let currentPage; 

    switch (this.state.page) {
      case 'about me':
        currentPage = <AboutMe />;
      default:
        currentPage = <AboutMe />;
    }
    return (
      <div className="App">
        <NavBar />
        <AboutMe />
      </div>
    );
  }
}

export default App;
