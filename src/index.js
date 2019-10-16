import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './utils/GlobalStyles'
import { theme } from './utils/theme'

const root = document.getElementById('root')

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
  , root
)
