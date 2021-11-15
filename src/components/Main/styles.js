import styled from 'styled-components'


export const Container = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const ContainerAbout = styled.div`
    width: 90vw;
    height: 40vh;
`
export const BoxAbout = styled.div`
    
`
export const TitleAbout = styled.h2`
    
`
export const ParagraphAbout = styled.p`
    
`
export const BoxImageAbout = styled.div`
    
`
export const ContainerCards = styled.section`
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    
`
export const BoxCard = styled.div` 
    width: 45rem;
    height: 25rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`
export const BoxImage = styled.div` 
    width: 75%;
    height: 28vh;
    transition: all 0.7s;

    &:hover {
        transform: scale(1.08);
        cursor: pointer;
        background-color: #ff4655;
        z-index: 3;
    }
`
export const BoxText = styled.div` 

`
export const Image = styled.img`
    width: 100%;
    height: 28vh;

`