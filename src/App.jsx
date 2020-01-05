import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Home, CharacterSheet, NotFound, AboutMe, Portfolio } from './pages'

export const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/character-sheet" component={CharacterSheet} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
