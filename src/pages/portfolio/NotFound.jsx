import React from 'react'
import { Link } from 'react-router-dom'
import { Fallback } from 'warlock-ui'
import theQuiz from '../../assets/images/undraw_quiz.png'

export const NotFound = () => (
  <Fallback
    image={theQuiz}
    imageAlt="Quiz"
    message="Looks like this project doesn't exist"
  >
    <Link to="/portfolio">Take me back to the other projects</Link>
  </Fallback>
)
