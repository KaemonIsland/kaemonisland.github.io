import React, { Component } from 'react';
import './App.scss';

import NavBar from './pages/navBar/NavBar';
import AboutMe from './pages/aboutMe/AboutMe';
import MyJam from './pages/myJam/MyJam';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'My Jam'
    }

    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  render() {
    let currentPage; 

    switch (this.state.page) {
      case 'About Me':
        currentPage = <AboutMe />;
        break;
      case 'My Jam':
        currentPage = <MyJam />;
        break;
      default:
        currentPage = <AboutMe />;
        break;
    }
    return (
      <div className="App">
        <NavBar changePage={this.changePage} />
        {currentPage}
      </div>
    );
  }
}

export default App;
