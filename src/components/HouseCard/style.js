import styled from "styled-components";
import { ReactComponent as bed } from '../../assets/icon/bed.svg'
import { ReactComponent as bath } from '../../assets/icon/bath.svg'
import { ReactComponent as car } from '../../assets/icon/car.svg'
import { ReactComponent as ruler } from '../../assets/icon/ruler.svg'
import { ReactComponent as resize } from '../../assets/icon/resize.svg'
import { ReactComponent as love } from '../../assets/icon/love.svg'

 
const Container = styled.div`
height: 430px;
width: 380px;
border: 1px solid #e1e1e1;
border-radius: 3px;
overflow: hidden;
margin: 100px;
`
const Image = styled.img`
width: 100%;
height: 220px;
`
const Content = styled.div`
padding: 20px;
`
const Swagger = styled.div`
display: flex;
justify-content: space-between;
padding-top: ${({footer})=>footer ? '0' : '15px'};
`
Swagger.Bed = styled(bed)``
Swagger.Bath = styled(bath)``
Swagger.Car = styled(car)``
Swagger.Ruler = styled(ruler)``
Swagger.Resize = styled(resize)`
cursor: pointer;
`
Swagger.Love = styled(love)`
margin-left: 10px;
width: 35px;
height: 35px; 
background: #f6f8f9;
padding: 10px;
border-radius: 50%;
cursor: pointer;
.active{
    transform: scale(0.9);
}
`

Swagger.Item = styled.div`
display: flex;
flex-direction: ${({footer})=>footer? 'row' : 'column'};
align-items: center;
`
const Line = styled.div`
height: 2px;
background: #e6e9ec;
`

export{Container, Image, Content, Swagger, Line}