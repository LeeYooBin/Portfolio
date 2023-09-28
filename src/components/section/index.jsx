import React from "react";
import * as S from "./style";

const Section = ({ children, id }) => (
  <S.Content id={id}>{children}</S.Content>
);

export default Section;
