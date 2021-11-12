import styled from 'styled-components'


export const SectionHeader = styled.section`
    height: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #111111;
    box-shadow:0px 30px 30px 0px rgba(0,0,0,0.75);
`
export const Logo = styled.img`
    width: 5.5vw;
    cursor: pointer ;
`
export const Navegation = styled.div`
    
    width: 40%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const BtnNav = styled.button`
    width: 15%;
    height: 60%;
    padding-bottom: 5px;
    border: 0px;
    background-color: transparent;
    font-family: "valorant1";
    color: #FBE8F9;
    font-size:1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.7s;

    &:hover {
        transform: scale(1.05);
        border-bottom: 2px solid #F84754;
    }
`
export const BtnPlay = styled.button`
    width: 10vw;
    height: 8vh;
    border-radius: 4px;
    padding: 5px;
    border: none;
    background-color: #F84754;
    color: #FBE8F9;
    font-size:1.5vw;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.1);
        background-color: black;
        color: #F84754;
        border-bottom: 2px solid #F84754;
        border-radius: 1px;
    }
`
export const SectionBackground = styled.section`
    background-image: url(${props => props.back});
    background-position: center;
    background-size: cover;
    height: 98vh;
    color: #ECE8E2;
`
export const BoxBackground = styled.div`
    width: 50%;
    height: 75%;
    margin-left: 50px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`
export const BoxText = styled.div`
    height: 70%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    background-color: ;
` 
export const TitleB = styled.h1`
    font-family: "valorant";
    font-size: 10vw;
    text-shadow: 0px -1px 0px rgba(150, 150, 150, 1);
`
export const SubTitleB = styled.h2`
    
`
export const ParagraphB = styled.p`
    
`
export const BtnBackground = styled.button`
    width: 12vw;
    height: 9vh;
    border-radius: 4px;
    padding: 5px;
    border: none;
    background-color: #F84754;
    color: #FBE8F9;
    font-size:1.5vw;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    transition: all 0.3s ease;

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
