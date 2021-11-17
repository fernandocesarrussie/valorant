import styled from 'styled-components'

export const Container = styled.div` 
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #585858;
    background-color: #111111;

`
export const BoxCenter = styled.div` 
    width: 60vw;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`
export const BoxTitle = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const TitleFooter = styled.h3` 
    font-size: 1.8vw;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
        color: white;
    }
`
export const LogoImage = styled.img` 
    width: 10vw;
    cursor: pointer;
`
export const BoxSocial = styled.div` 
    
`
export const BoxCopy = styled.div` 
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`
export const ParagraphCopy = styled.p` 
    font-size: 0.8vw;
    text-align: center;

    &:hover{
        cursor: pointer;
        color: white;
    }
`
export const ImageClass = styled.img` 
    width: 90%;
    cursor: pointer;
`
