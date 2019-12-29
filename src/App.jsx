import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Home, CharacterSheet, MyJam, NotFound } from './pages'

export const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/myjam" component={MyJam} />
      <Route exact path="/character-sheet" component={CharacterSheet} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
