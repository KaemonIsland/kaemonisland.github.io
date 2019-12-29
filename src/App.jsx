import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Home, CharacterSheet, MyJam, NotFound, AboutMe } from './pages'

export const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/projects" component={MyJam} />
      <Route exact path="/character-sheet" component={CharacterSheet} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
