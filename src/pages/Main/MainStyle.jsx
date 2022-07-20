import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    padding: 5vh 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 700px){
        padding: 10vh 5%;
    }

    @media screen and (min-width: 920px){
        flex-direction: row-reverse;
        padding: 10vh 10%;
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
        font-size: 1.2em;
        margin-top: 1vh;
        font-weight: 500;
    }

    h1{
        font-size: 1.7em;
    }

    @media screen and (min-width: 700px){
        p{
            font-size: 1.5em;
        }

        h1{
            font-size: 2em;
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
    width: 50vw;
    border-radius: 50%;

    @media screen and (min-width: 500px){
        width: 40vw;
    }

    @media screen and (min-width: 920px){
        width: 25vw;
    }

`;

export const Links = styled.nav`
    margin-top: 3vh;
    padding: 2.5%;
    height: auto;
    background-color: #FFF;
    border: 3px solid #000;

    p{
        font-size: 1.3em;
        font-weight: 500;
    }

    h3{
        font-size: 1.5em;
    }

    @media screen and (min-width: 500px){
        p{
            font-size: 1.3em;
        }

        h3{
            font-size: 1.5em;
        }
    }

    @media screen and (min-width: 700px){
        p{
            font-size: 1.5em;
        }

        h3{
            font-size: 1.7em;
        }
    }

    @media screen and (min-width: 920px){
        p{
            font-size: 1.2em;
        }

        h3{
            font-size: 1.4em;
        }
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: #d600ff;
    font-size: 1em;
    font-weight: 600;

    @media screen and (min-width: 700px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1281px){
        font-size: 1em;
    }
`;