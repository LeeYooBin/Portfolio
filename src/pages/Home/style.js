import styled from "styled-components";
import theme from "../../styles/theme";

export const Content = styled.div`
  width: 100%;
  height: auto;
  background-color: ${theme.colors.background};
  padding: 2.4rem;

  @media screen and (min-width: 760px) {
    padding: 2.4rem 4rem;
  }

  @media screen and (min-width: 920px) {
    padding: 3rem 25rem;
  }
`;

export const ExperiencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 920px) {
    gap: 5rem;
    justify-content: space-between;
  }
`;

export const Link = styled.a`
  font-size: 5rem;
  color: ${theme.colors.text};
`;

export const AboutSection = styled.section`
  padding: 2rem 0 1rem 0;

  @media screen and (min-width: 920px) {
    display: flex;
    gap: 5rem;
  }
`;