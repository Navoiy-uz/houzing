import React, {forwardRef} from 'react'
import { Container, Icon, Wrapper } from './style'


const Input = forwardRef(({
  children, 
  width, 
  Icons, 
  icon, 
  type, 
  height, 
  onChange, 
  placeholder, 
  name, 
  value, 
  defaultValue },ref)=>{
    return (
      <Wrapper>
  <Icon>{Icons}</Icon>
        <Container 
        placeholder={placeholder} 
        type={type} 
        value={value}
        defaultValue={defaultValue}
        ref={ref}
        name={name}
        height={height} 
        width={width}
        icon={icon}
        onChange={onChange}
        >{children}</Container>
      </Wrapper>
    )
  })
export default Input
