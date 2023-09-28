import styled from "styled-components";
import theme from "../../styles/theme";

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;

  @media screen and (min-width: 760px) {
    width: 30rem;
  }
`;

export const Image = styled.img`
  border-radius: 2rem 2rem 0 0;
  width: 100%;
  height: 18rem;
`;

export const Info = styled.div`
  color: ${theme.colors.text};
  background-color: ${theme.colors.project};
  border-radius: 0 0 2rem 2rem;
  padding: 2.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  text-align: justify;

  @media screen and (min-width: 760px) {
    padding: 2rem;
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fonts.projectTitle};
  font-weight: 700;
`;

export const Description = styled.h3`
  margin: 1.2rem 0;
  font-size: ${theme.fonts.projectText};
  font-weight: 500;
`;

export const Stacks = styled.h3`
  font-size: ${theme.fonts.projectText};
  font-weight: 500;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const Link = styled.a`
  color: ${theme.colors.text};
  font-size: ${theme.fonts.text};
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: .5rem;
`;