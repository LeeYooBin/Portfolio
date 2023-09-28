import React from "react";
import * as S from './style';

const ProfileImage = ({ src = '', alt = '' }) => (
  <S.Content src={src} alt={alt} />
);

export default ProfileImage;
