import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Prompt:wght@100&family=Roboto+Condensed:ital@1&family=Roboto:wght@100&display=swap');
        font-family: 'Montserrat', sans-serif;
        background-color: #E5E5E5;
    }
`;

export const SubTitle = styled.h2`
    font-size: 2em;
    margin-bottom: 2vh;
`;

export const Wrapper = styled.section`
    padding: 5%;
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

    @media screen and (min-width: 1000px){
        padding: 0 5%;
        justify-content: center;
        gap: 1.5em;
    }
`;

export const Skill = styled.li`
    width: 43vw;
    height: 21.5vh;
    background-color: aliceblue;
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


