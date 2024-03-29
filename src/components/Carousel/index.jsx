import { Carousel } from 'antd'
import React, { useRef } from 'react'
import { Arrow, ArrowLeft, Blur, Container, Content, Image } from './style'
import Home1 from '../../assets/img/house1.jpg'
import Home2 from '../../assets/img/house2.jpg'
import Home3 from '../../assets/img/house3.jpg'


export const CarouselCard = () => {
    
      const corusel = useRef()
      const onMove =({target:{dataset:{name}}})=>{
        if(name==='right') corusel.current.next()
        if(name==='left') corusel.current.prev()
      }
  return (
    <Container>
          <Carousel ref={corusel} >
      <Image src={Home1} alt="#" />
      <Image src={Home2} alt="#" />
      <Image src={Home3} alt="#" />
    </Carousel>
    <Blur/>
    <Content>
      <Content.Title>
        Skyper Pool Partment
      </Content.Title>
     <Content.SubTitle>112 Glenwood Ave Hyde Park, Boston, MA</Content.SubTitle> 
     <Content.Price>
     $5,250 / mo
     </Content.Price>
    </Content>
        <ArrowLeft onClick={onMove} data-name='left' />
        <Arrow onClick={onMove} data-name='right' />
    </Container>
  )
}

export default CarouselCard