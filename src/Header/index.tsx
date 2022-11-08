import React, { ReactNode } from 'react'
import { Container } from './styles'

interface IHeader {
  children: ReactNode | any;
  title: string;
}

function Header({children, title}: IHeader) {
  return (
    <Container >
      <h1>{title}</h1>
       <div> {children}</div>
    </Container>
  )
}

export default Header