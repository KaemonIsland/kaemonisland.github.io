import React from 'react';
import './App.scss';

import NavBar from './pages/navBar/NavBar';
import AboutMe from './pages/aboutMe/AboutMe';
import MyJam from './pages/myJam/MyJam';

export const App = () => {

  return (
    <div className="App">
      <NavBar />
      <MyJam />
      <AboutMe />
    </div>
  )
}
