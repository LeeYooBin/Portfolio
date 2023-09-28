import React from "react";
import * as S from "./style";
import { AiTwotoneCalendar } from 'react-icons/ai';
import { BiBuilding } from 'react-icons/bi';
import { BsGeoAlt } from 'react-icons/bs';

const ExperienceCard = ({ title, company, local, date }) => (
  <S.Content>
    <S.Title>{title}</S.Title>
    <S.InfoWrapper>
      <S.Info>
        <AiTwotoneCalendar />
        {company}
      </S.Info>
      <S.Info>
        <BsGeoAlt />
        {local}
      </S.Info>
      <S.Info>
        <BiBuilding />
        {date}
      </S.Info>
    </S.InfoWrapper>
  </S.Content>
);

export default ExperienceCard;
