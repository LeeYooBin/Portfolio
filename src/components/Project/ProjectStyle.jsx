import styled from "styled-components";

export const Project = styled.div`
    width: 100%;
    height: 30%;
    padding: 5%;
    background-color: #FFF;
    border: 3px solid #000;
    border-radius: 10px;
    margin-top: 3vh;

    @media screen and (min-width: 700px){
        width: 43vw;
        height: 18vh;
        margin-top: 1vh;
        padding: 2%;
        gap: 1rem;
    }

    @media screen and (min-width: 900px){
        height: 13vh;
    }

    @media screen and (min-width: 1000px){
        height: 30vh;
        width: 39vw;
    }

    @media screen and (min-width: 1200px){
        height: 25vh;
        width: 38vw;
    }
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;

    span{
        margin-left: 2vw;
    }

    @media screen and (min-width: 1000px){
        span{
            margin-left: 0.65vw;
        }
    }
`;

export const Star = {
    transform: 'rotate(-35deg)'
};

export const Links = styled.nav`
    margin-left: 9vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5vw;

    p{
        font-size: 1.3em;
    }

    @media screen and (min-width: 500px){
        margin-left: 7vw;
        gap: 0.2rem;

        p{
            font-size: 1.2em;
        }
    }

    @media screen and (min-width: 700px){
        margin-left: 4.5vw;
    }

    @media screen and (min-width: 1000px){
        margin-left: 3vw;
    }

    @media screen and (min-width: 1200px){
        margin-left: 2.5vw;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 1.3em;
    font-weight: 600;
    color: #d600ff;

    @media screen and (min-width: 700px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1200px){
        border-bottom: 2px solid transparent;

        &:hover{
            border-bottom: 2px solid #d600ff;
        }
    }
`;

export const Text = styled.p`
    font-size: 1.3em;
    font-weight: 500;
    margin-left: 9vw;
    margin-top: 1vh;

    @media screen and (min-width: 500px){
        font-size: 1.2em;
        margin-left: 7vw;
    }

    @media screen and (min-width: 700px){
        margin-left: 4.5vw;
        margin-top: 1vh;
    }

    @media screen and (min-width: 1000px){
        margin-left: 3vw;
    }

    @media screen and (min-width: 1200px){
        margin-top: 1vh;
        margin-left: 2.5vw;
    }
`;