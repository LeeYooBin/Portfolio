import * as S from './MainStyle';
import profile from '../../assets/img/profile.jpg';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Main(){
    return(
        <>
            <S.Main>
                <S.Profile src={profile} alt="Profile image" />
                <S.TextWrapper>
                    <S.Article>
                        <h1>Hi, I'm Roberdan Santos, web developer.</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Deleniti quas nihil itaque ipsum aut, eius tempore atque?
                            Fuga facere saepe earum, unde aut veritatis quas voluptate
                            aspernatur aliquid. Facere, at.
                        </p>
                    </S.Article>
                    <S.Links>
                        <S.Link href="https://github.com/LeeYooBin" target="_blank">Github <span><FaExternalLinkAlt /></span></S.Link>
                        <S.Link href="https://www.linkedin.com/in/roberdan-santos/" target="_blank">Linkedin <span><FaExternalLinkAlt /></span></S.Link>
                        <S.Link href="https://www.instagram.com/roberdantamyr/" target="_blank">Instagram <span><FaExternalLinkAlt /></span></S.Link>
                        <S.Link href="https://fabulous-croissant-6fe3cb.netlify.app/" target="_blank">Resume <span><FaExternalLinkAlt /></span></S.Link>
                    </S.Links>
                </S.TextWrapper>
            </S.Main>
        </>
    );
}
