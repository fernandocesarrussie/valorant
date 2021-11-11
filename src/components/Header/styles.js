import styled from 'styled-components'


export const SectionHeader = styled.section`
    height: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
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
    height: 125vh;
`