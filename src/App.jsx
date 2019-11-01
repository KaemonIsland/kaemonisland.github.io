import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { AboutMe, MyJam, NotFound } from './pages'

export const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={MyJam} />
      <Route exact path="/myjam" component={MyJam} />
      <Route exact path="/about" component={AboutMe} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
