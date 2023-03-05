import styled from "styled-components";

const getType = ({type}) => {
    switch (type) {
        case 'dark': return {
            background: 'transparent',
            color: '#fff',
            border: '1px solid #fff'
        }
        case 'light': return {
            background: 'transparent',
            color: '#od263b',
            border: '1px solid #e6e9ec'
        }
        case 'primary': return {
            background: '0061df',
            color: '#fff',
            border: '1px solid #fff'
        }
        default: return {
            background: '#0061df',
            color: '#fff',
            border: 'none'
            
        }
    }
}


export const Container = styled.input`
width: ${({ width }) => width ? `${width}px` : '100%'};
height: ${({ height }) => height ? `${height}px` : '44px'};
/* display: flex;
align-items: center;
justify-content: center; */
outline: none;
padding-left: ${({icon})=>icon ? '30px': '10px'};
border: 1px solid #e6e9ec;
border-radius: 2px;
/* cursor: pointer; */
font-size: ${({fontSize})=>fontSize ? `${fontSize}px` : '14px'};
/* ${getType} */
`

export const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
position: relative;
`

export const Icon = styled.div`
position: absolute;
margin-left: 5px;
`