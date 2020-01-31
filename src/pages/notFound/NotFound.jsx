import React from 'react'
import { Link } from 'react-router-dom'
import { Fallback } from 'warlock-ui'
import theVoid from '../../assets/images/undraw_void.png'

export const NotFound = () => (
  <Fallback image={theVoid} imageAlt="Lost" message="How'd you get here?">
    <Link to="/">Take me home</Link>
  </Fallback>
)
