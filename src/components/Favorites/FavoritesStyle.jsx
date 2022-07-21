import styled from "styled-components";

export const LinkStyle = {
    'text-decoration': 'none',
    'font-size': '1.3em',
    'align-self': 'center',
    'margin-top': window.screen.width >= 1000 ? '7vh' : '3vh'
};

export const PortfolioLink = styled.p`
    font-weight: 600;
    color: #d600ff;

    @media screen and (min-width: 1200px){
        border-bottom: 2px solid transparent;

        &:hover{
            border-bottom: 2px solid #d600ff;
        }
    }
`;
