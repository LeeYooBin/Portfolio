import styled from "styled-components";

export const Navbar = styled.nav`
    max-width: 100%;
`

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: fixed;
    top: 1.6%;
    right: 5%;
    z-index: 20;
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#000'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(46deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-46deg)' : 'rotate(0)'};
        }
    }

    @media (min-width: 920px) {
       display: none;
    }
`;

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 12%;
    background-color: #2D3142;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 40vh;
    width: 50vw;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;
    z-index: 15;

    a{
        text-decoration: none;
        color: #FFF;
        font-weight: 300;
    }

    @media (min-width: 920px) {
        transform: translateX(100%);
        position: absolute;
        right: 37%;
        top: 33%;
        padding: 0;
        width: 25%;
        background: transparent;
        font-weight: 700;
        height: auto;
        flex-direction: row;

        a{
            color: #000;
            width: auto;
            padding: 0.1%;
            text-align: center;
            font-size: 1.1em;
            font-weight: 700;
            border-bottom: solid 2px transparent;

            :hover{
                border-bottom: solid 2px #000;
            }
        }
    }

    @media (min-width: 1200px) {
        top: 40%;
    }
`;
