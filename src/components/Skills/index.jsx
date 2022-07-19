import * as S from '../../style/Global'
import './SkillStyle.css';
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { FaJava } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { ImDatabase } from 'react-icons/im';

export default function Skills(){
    return(
        <>
            <S.Wrapper id='skills'>
                <S.SubTitle>Skills</S.SubTitle>
                <S.SkillsWrapper>
                    <S.Skill className='html5'>
                        <ImHtmlFive style={S.Icon} /> <span>HTML5</span>
                    </S.Skill>
                    <S.Skill className='css3'>
                        <SiCss3 style={S.Icon}/> <span>CSS3</span>
                    </S.Skill>
                    <S.Skill className='javascript'>
                        <SiJavascript style={S.Icon}/> <span>Javascript</span>
                    </S.Skill>
                    <S.Skill className='react'>
                        <GrReactjs style={S.Icon}/> <span>React JS</span>
                    </S.Skill>
                    <S.Skill className='typescript'>
                        <SiTypescript style={S.Icon}/> <span>Typescript</span>
                    </S.Skill>
                    <S.Skill className='node'>
                        <GrNode style={S.Icon}/> <span>Node JS</span>
                    </S.Skill>
                    <S.Skill className='java'>
                        <FaJava style={S.Icon}/> <span>Java</span>
                    </S.Skill>
                    <S.Skill className='spring'>
                        <SiSpringboot style={S.Icon}/> <span>Spring Boot</span>
                    </S.Skill>
                    <S.Skill className='sql'>
                        <ImDatabase style={S.Icon}/> <span>Sql</span>
                    </S.Skill>
                </S.SkillsWrapper>
            </S.Wrapper>
        </>
    );
}