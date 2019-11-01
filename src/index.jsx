import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import { GlobalStyles } from './utils/GlobalStyles'
import { theme } from './utils/theme'

const root = document.getElementById('root')

// prettier-ignore
ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Router>,
  root,
)
