import React from 'react'

import { NavBar } from './components/NavBar'
import { AboutMe } from './pages/aboutMe/AboutMe'
import { MyJam } from './pages/myJam/MyJam'

export const App = () => (
  <div className="App">
    <NavBar />
    <MyJam />
    <AboutMe />
  </div>
)
