import React from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { Container, Logo, Section, Wrapper,Link } from './style'
import { navbar } from '../../utils/navbar'

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section logo onClick={()=> navigate('/home')}>
          <Logo/>
          <h3>Houzing</h3>
        </Section>
        <Section>
          {
            navbar.map(({ title, path, }, index )=>{
return(
  <Link className={({isActive})=>isActive&&'active'} key={index} to={path}>{title}</Link>
)
            })
          }
        </Section>
        <Section><button>login</button></Section>
      </Wrapper>
        <Outlet />
    </Container>
  )
}
export default Home;