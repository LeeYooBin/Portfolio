import * as S from '../../style/Global';
import './HobbiesStyle.css';
import { CgGym } from 'react-icons/cg';
import { IoLogoGameControllerB } from 'react-icons/io';
import { FaMusic } from 'react-icons/fa';
import { GiBookshelf } from 'react-icons/gi';
import { MdMovie } from 'react-icons/md';
import { FaGuitar } from 'react-icons/fa';
import { GiSoccerBall } from 'react-icons/gi';
import { GiCookingGlove } from 'react-icons/gi';

export default function Hobbies(){
    return(
        <>
            <S.Wrapper id='hobbies'>
                <S.SubTitle>Hobbies</S.SubTitle>
                <S.SkillsWrapper>
                    <S.Skill className='gym'>
                        <CgGym style={S.Icon}/>
                        <span>Gym</span>
                    </S.Skill>
                    <S.Skill className='games'>
                        <IoLogoGameControllerB style={S.Icon}/>
                        <span>Games</span>
                    </S.Skill>
                    <S.Skill className='music'>
                        <FaMusic style={S.Icon}/>
                        <span>Music</span>
                    </S.Skill>
                    <S.Skill className='books'>
                        <GiBookshelf style={S.Icon}/>
                        <span>Books</span>
                    </S.Skill>
                    <S.Skill className='movies'>
                        <MdMovie style={S.Icon}/>
                        <span>Movies</span>
                    </S.Skill>
                    <S.Skill className='guitar'>
                        <FaGuitar style={S.Icon}/>
                        <span>Guitar</span>
                    </S.Skill>
                    <S.Skill className='sports'>
                        <GiSoccerBall style={S.Icon}/>
                        <span>Sports</span>
                    </S.Skill>
                    <S.Skill className='cooking'>
                        <GiCookingGlove style={S.Icon}/>
                        <span>Cooking</span>
                    </S.Skill>
                </S.SkillsWrapper>
            </S.Wrapper>
        </>
    );
}