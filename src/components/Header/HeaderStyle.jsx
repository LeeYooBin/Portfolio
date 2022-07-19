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

export const Logo = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 0.6em;

    @media screen and (min-width: 700px){
        font-size: 0.8em;
    }
`;