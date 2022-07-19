import styled from "styled-components";

export const Education = styled.section`
    padding: 3vh 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #1C1D21;
    color: #FFF;

    @media screen and (min-width: 1000px){
        padding: 3vh 10%;
    }
`;

export const EducationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: 700px){
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Space = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.1em;
`;

export const ImgWrapper = styled.div`
    width: 90vw;
    height: 45vh;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 700px){
        width: 43vw;
        height: 25vh;
    }

    @media screen and (min-width: 1000px){
        width: 25vw;
        height: 30vh;
    }
`;

export const Img = styled.img`
    width: 35vw;

    @media screen and (min-width: 700px){
        width: 20vw;
    }

    @media screen and (min-width: 1000px){
        width: 10vw;
    }
`;

export const H4 = styled.h4`
    margin: 1.5vh 0;
`;