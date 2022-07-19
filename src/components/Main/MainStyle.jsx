import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    padding: 5vh 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 500px){
        flex-direction: row-reverse;
        padding: 1.5vh 5%;
    }

    @media screen and (min-width: 920px){
        padding: 5vh 10%;
    }
`;

export const TextWrapper = styled.div`
    @media screen and (min-width: 500px){
        margin-right: 2vw;
    }
`;

export const Article = styled.article`
    margin-top: 3vh;

    p{
        margin-top: 1vh;
        font-weight: 500;
    }

    @media screen and (min-width: 700px){
        p{
            font-size: 1.2em;
        }

        h1{
            font-size: 1.7em;
        }
    }

    @media screen and (min-width: 920px){
        p{
            font-size: 1.5em;
        }

        h1{
            font-size: 2em;
        }
    }

    @media screen and (min-width: 1281px){
        p{
            font-size: 1.2em;
        }

        h1{
            font-size: 2.3em;
        }
    }
`;

export const Profile = styled.img`
    width: 40vw;
    border-radius: 50%;

    @media screen and (min-width: 500px){
        width: 25vw;
    }

    @media screen and (min-width: 700px){
        width: 20vw;
    }
`;

export const Links = styled.nav`
    margin-top: 1.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 700px){
        width: 80%;
    }

    @media screen and (min-width: 920px){
        width: 70%;
    }

    @media screen and (min-width: 1281px){
        width: 50%;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 1em;

    span{
        font-size: 0.75em;
    }

    @media screen and (min-width: 700px){
        font-size: 1.2em;

        span{
            font-size: 0.7em;
        }
    }

    @media screen and (min-width: 920px){
        span{
            font-size: 0.75em;
        }
    }

    @media screen and (min-width: 1281px){
        font-size: 1em;

        span{
            font-size: 0.7em;
        }
    }
`;