import styled from "styled-components";

export const About = styled.section`
    background-color: #353535;
    color: aliceblue;
    padding: 5%;

    @media screen and (min-width: 920px){
        padding: 5% 10%;
    }
`;

export const AboutWrapper = styled.div`
    @media screen and (min-width: 700px){
        display: flex;
    }
`

export const Image = styled.img`
    display: none;

    @media screen and (min-width: 700px){
        display: block;
        width: 35vw;
    }

    @media screen and (min-width: 920px){
        width: 30vw;
    }

    @media screen and (min-width: 1200px){
        width: 20vw;
    }
`;

export const List = styled.ul`
    list-style: none;

    @media screen and (min-width: 700px){
        margin-left: 5vw;
    }

    @media screen and (min-width: 920px){
        margin-left: 3vw;
    }
`;

export const Item = styled.li`
    margin-top: 1.5vh;
    width: auto;
    display: flex;
    align-items: center;
    font-size: 1.1em;

    @media screen and (min-width: 700px){
        font-size: 1.2em;
    }
`;

export const Text = styled.p`
    font-size: 1em;

    @media screen and (min-width: 700px){
        width: 90%;
    }

    @media screen and (min-width: 920px){
        width: 80%;
    }
`;

export const Icon = styled.img`
    width: 7vw;
    margin-right: 3vw;

    @media screen and (min-width: 700px){
        width: 4vw;
    }

    @media screen and (min-width: 920px){
        width: 3vw;
        margin-right: 1.5vw;
    }

    @media screen and (min-width: 1200px){
        width: 2.5vw;
    }
`;