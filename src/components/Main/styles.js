import styled from 'styled-components'


export const Container = styled.div`
   
`
export const ContainerAbout = styled.div`
    max-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 40px;
    background-color: #F84754;
`
export const TitleAbout = styled.h2`
    width: 93%;
    font-size:6.5vw;
    color: #ECE8E2;
`
export const BoxContent = styled.div`  
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const BoxAbout = styled.div`
    width: 40%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    text-align: right;
`
export const ParagraphAbout = styled.p`
    font-size: 2vw;
    color: #ECE8E2;
    `
export const BoxImageAbout = styled.div`
    max-width: 48vw;
    max-height: 68vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    padding: 20px;
    position: relative;
    `
export const ImgVideo = styled.img` 
    max-width: 40vw;
`
export const Play = styled.img` 
    width: 40px;
    position: absolute;
    transition: all ease 0.3s;

    &:hover{
        transform: scale(1.5);
        cursor: pointer;
    }
`
export const ContainerCards = styled.section`
    width: 100%;
    min-height: 180vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0F1923;
`
export const Section = styled.div` 
    width: 90vw;
    min-height: 150vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`
export const BoxCard = styled.div` 
    width: 28rem;
    height: 60vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border: 1px solid white;
`
export const TitleCard = styled.h2` 
    width: 50%;
    text-align: center;
    font-size: 2.5vw;
    color: white;
    border-bottom: 1px solid white;
    
`
export const BoxImage = styled.figure`
    width: 75%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.7s;

    &:hover {
        transform: scale(1.08);
        cursor: pointer;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`
export const BoxBtn = styled.div`
    min-width: 15vw;
    min-height: 8.5vh;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
export const BtnMore = styled.button`
    width: 95%;
    height: 80%;
    padding: 5px;
    border: none;
    background-color: #F84754;
    color: #FBE8F9;
    font-size:1.4vw;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    transition: all 0.4s ease;

    &:hover {
        transform: scale(1);
        border-radius: 1px;
    }

    &:hover:after {
    width: 100%;
    }
    
    &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #0F1923;
    }
`
export const BoxText = styled.div` 

`

export const ContainerAgents = styled.section`
    max-width: 100%;
    max-height: 120vh;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #0F1923;
    color: #ECE8E2;
    padding: 40px;
`
export const Agents = styled.img` 
    max-width: 50vw;
    
`
export const BoxTextAgents = styled.div` 
    max-width: 35vw;
    max-height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`
export const TitleAgents = styled.h2` 
    font-size: 9.5vw;
`
export const ParagraphAgents = styled.p` 
    font-size: 1.4vw;
`
export const BoxItemAgents = styled.div` 
    background-color:blue;
`
export const TextBio = styled.p` 
    
`
export const TextClass = styled.p` 
    
`
export const TextEquip = styled.p` 
    
`
export const BoxCollectionAgents = styled.div` 
    background-color:;
`
export const BoxBtnAgent = styled.div`
    max-width: 15vw;
    max-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    margin-top: 20px;
`
export const BtnAgent = styled.button`
    width: 90%;
    height: 80%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #F84754;
    color: #FBE8F9;
    font-size:1.3vw;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        transform: scale(1.03);
    }
`