import styled from "styled-components";
import theme from "../../styles/theme";

export const Content = styled.h1`
  color ${theme.colors.text};
  font-size: ${theme.fonts.heading};
  font-weight: 700;
  margin: 5rem 0;

  @media screen and (min-width: 760px) {
    margin: 2.5rem 0;
  }
`;

