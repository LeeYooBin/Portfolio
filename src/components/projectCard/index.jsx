import React from "react";
import * as S from "./style";
import { BsLink45Deg } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({ 
  src = '', 
  alt = '', 
  title = '', 
  description = '', 
  stacks = '',
  previewLink = '#',
  codeLink = '#'
}) => (
  <S.Content>
    <S.Image src={src} alt={alt} />
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Stacks>Tech Stacks: {stacks}</S.Stacks>
      <S.LinkWrapper>
        <S.Link href={previewLink} target="_blank"><BsLink45Deg />Live Preview</S.Link>
        <S.Link href={codeLink} target="_blank"><AiFillGithub /> View Code</S.Link>
      </S.LinkWrapper>
    </S.Info>
  </S.Content>
);

export default ProjectCard;
