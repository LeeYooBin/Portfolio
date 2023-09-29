import styled from "styled-components";

export const Content = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 920px) {
    justify-content: center;
    gap: 7rem;
  }
`;