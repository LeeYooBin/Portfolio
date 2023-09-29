import React from "react";
import * as S from './style';

const NavLink = ({ children, href = '#' }) => (
  <S.Content href={href}>{children}</S.Content>
);

export default NavLink;