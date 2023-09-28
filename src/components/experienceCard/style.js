import styled from "styled-components";
import theme from "../../styles/theme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  gap: .5rem;
  width: 100%;
  height: auto;
  padding: 0 0 2rem 0;
  border-bottom: .1rem solid ${theme.colors.text};

  @media screen and (min-width: 760px) {
    width: 60%;
  }

  @media screen and (min-width: 920px) {
    width: 40%;
  }
`;

export const Title = styled.h3`
  color ${theme.colors.text};
  font-size: ${theme.fonts.projectTitle};
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.p`
  color ${theme.colors.text};
  font-size: ${theme.fonts.projectText};
  display: flex;
  align-items: center;
  gap: .5rem;
`;