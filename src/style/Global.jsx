import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Raleway', sans-serif;
        background-color: #F5F5F5;
    }
`;

export const SubTitle = styled.h2`
    font-size: 1.7em;
    margin-bottom: 2vh;
`;

export const Wrapper = styled.section`
    padding: 5vh 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SkillsWrapper = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: 2vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (min-width: 900px){
        padding: 0 5%;
        justify-content: center;
        gap: 1.5em;
    }
`;

export const Skill = styled.li`
    width: 43vw;
    height: 21.5vh;
    background-color: #FFF;
    border: 3px solid #000;
    margin-bottom: 2vh;
    color: #1C1D21;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
        color: #000;
        margin-top: 2vh;
        font-weight: 600;
    }

    @media screen and (min-width: 900px){
        width: 25vw;
        height: 12.5vh;
    }

    @media screen and (min-width: 1000px){
        margin-bottom: 0;
        width: 15vw;
        height: 25vh;
    }

    @media screen and (min-width: 1281px){
        :hover{
            transform: scale(1.10);
        }
    }
`;

export const Icon = {
    'font-size': '4em'
}

export const Portfolio = styled.section`
    padding: 5%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1000px){
        padding: 2.5% 10%;
    }
`;

export const PortfolioWrapper = styled.div`
    @media screen and (min-width: 700px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media screen and (min-width: 1000px){
        gap: 1rem;
    }
`;


