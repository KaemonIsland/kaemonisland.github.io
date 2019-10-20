import React from 'react';

import NavBar from './pages/navBar/NavBar';
import AboutMe from './pages/aboutMe/AboutMe';
import MyJam from './pages/myJam/MyJam';

export const App = () => {

  return (
    <div className="App">
      <NavBar />
      <AboutMe/>
    </div>
  )
}
