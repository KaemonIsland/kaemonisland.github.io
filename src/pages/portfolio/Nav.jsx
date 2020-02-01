import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from 'warlock-ui'

const PortfolioNav = styled.nav(({ theme }) => ({
  backgroundColor: theme.palette.gray.dark,
  boxShadow: theme.shadow.gray.medium,
  padding: '1rem 6rem',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 100,
  '& a': {
    color: 'white',
    textDecoration: 'none',
  },
}))

const projectLinks = [
  { path: '', title: 'Home' },
  { path: 'my-jam', title: 'My Jam' },
]

export const Nav = () => {
  return (
    <PortfolioNav>
      <Flex justifyContent="space-between" alignItems="center">
        {projectLinks.map(({ path, title }, i) => {
          return (
            <Flex.Item key={i}>
              <Link to={`/portfolio/${path}`}>{title}</Link>
            </Flex.Item>
          )
        })}
      </Flex>
    </PortfolioNav>
  )
}
