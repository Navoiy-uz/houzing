import React from 'react'
import { Container } from './style'

export const Button = ({children, type, height, onClick}) => {
  return (
    <Container type={type} height={height} onClick={onClick}>{children}</Container>
  )
}

export default Button
