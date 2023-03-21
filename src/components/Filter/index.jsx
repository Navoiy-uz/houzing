import { Dropdown } from 'antd'
import React, { useRef, useState } from 'react'
import { Button, Input } from '../Generic'
import { Container, Icon, Section, Wrapper } from './style'


export const Filter = () => {

  const counrtyRef = useRef()
  const regionRef = useRef()
  const cityRef = useRef()
  const zipCodeRef = useRef()
  const roomsRef = useRef()
  const sizeRef = useRef()
  const sortRef = useRef()
  const minPriceRef = useRef()
  const maxPriceRef = useRef()

  const [open,setOpen]=useState(false)
  const onOpenChange=()=>{
    setOpen(!open)
  }
  
  const items = [
    {
      key: '1',
      label: (
        <Wrapper>
     <h1 className='subTitle'>Address</h1>
     <Section>
       <Input ref={counrtyRef} placeholder='Country'/>
       <Input ref={regionRef} placeholder='Region'/>
       <Input ref={cityRef} placeholder='City'/>
       <Input ref={zipCodeRef} placeholder='Zip Code'/>
     </Section>
     <h1 className='subTitle'>Apartment Info</h1>
     <Section>
     <Input ref={roomsRef} placeholder='Rooms'/>
     <Input ref={sizeRef} placeholder='Size'/>
     <Input ref={sortRef} placeholder='Sort'/>
     </Section>
     <h1 className='subTitle'>Price</h1>
     <Section>
     <Input ref={minPriceRef} placeholder='Min Price'/>
     <Input ref={maxPriceRef} placeholder='Max Price'/>
  
     </Section>
     <Section footer> <Button type='light'>Cancel</Button> <Button>Submit</Button> </Section>
     </Wrapper>
      ),
    }
  ];
  return (
    <Container>
      
      <Input Icons={<Icon.Home/>} icon placeholder='Enter an adress, neighborhood, city, or ZIP code'/>
      <Dropdown onOpenChange={onOpenChange} open={open} menu={{items}} placement="bottomRight" arrow>
        <div>

      <Button  type='light'> <Icon.Setting/> Advanced</Button>
        </div>
    </Dropdown>
       <Button> <Icon.Search/> Search</Button> 
    </Container>
  )
}
export default Filter