import styled from '@emotion/styled'
import React from 'react'
import logo from './../images/logo_header.png'

const Home = () => {
  return (
    <Container>
      <Img src={logo} />
    </Container>
  )
}

export default Home

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;

  body {
    margin: 0;
  }
`

export const Img = styled.img`
  margin: auto;
  width: 30%;
`
