import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Nav, NotFound } from '.'
import { MyJam } from '../myJam'
import { Divider } from '../../elements'

export const Portfolio = () => {
  return (
    <>
      <Nav />
      <Divider padding="3rem" />
      <Switch>
        <Route exact path="/portfolio/my-jam" component={MyJam} />
        <Route path="/portfolio" component={NotFound} />
      </Switch>
    </>
  )
}
