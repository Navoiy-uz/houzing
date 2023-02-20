import React from 'react'
import { Container } from './style'

export const Input = ({children, type, height, onChange, placeholder, name, value, defaultValue }) => {
  return (
    <Container 
    placeholder={placeholder} 
    type={type} 
    value={value}
    defaultValue={defaultValue}
    name={name}
    height={height} 
    onChange={onChange}>{children}</Container>
  )
}

export default Input
