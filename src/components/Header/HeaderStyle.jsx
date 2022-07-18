import styled from "styled-components";

export const Header = styled.header`
    max-width: 100%;
    padding: 4% 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 500px){
        padding: 3% 5%;
    }

    @media screen and (min-width: 920px){
        padding: 2% 10%;
        position: relative;
    }
`;

export const Logo = styled.img`
    width: 45vw;

    @media screen and (min-width: 500px){
        width: 30vw;
    }

    @media screen and (min-width: 920px){
        width: 15vw;
    }
`;