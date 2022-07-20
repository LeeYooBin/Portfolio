import { SubTitle } from '../../style/Global'
import * as S from './AboutTextStyle';
import pic from '../../assets/img/pic2.png';
import it from '../../assets/img/it.png';
import web from '../../assets/img/web.png';
import languages from '../../assets/img/languages.png';
import age from '../../assets/img/age.png';
import loc from '../../assets/img/loc.png';

export default function AboutText(){
    return(
        <>
            <S.About>
                <SubTitle>About me.</SubTitle>
                <S.AboutWrapper>
                    <S.Image src={pic} alt="" />
                    <S.List>
                        <S.Item>
                            <S.Text>
                                I like working on the web development.
                                I work with projects involving websites building,
                                APIs and database. I'm currently focusing on frontend technologies.
                            </S.Text>
                        </S.Item>
                        <S.Item>
                            <S.Icon src={age} alt="" />
                            I'm 21 years old.
                        </S.Item>
                        <S.Item>
                            <S.Icon src={loc} alt="" />
                            I'm from Sergipe, Brazil.
                        </S.Item>
                        <S.Item>
                            <S.Icon src={it} alt="" />
                            I'm studying in computer science.
                        </S.Item>
                        <S.Item>
                            <S.Icon src={web} alt="" />
                            I'm learning web development.
                        </S.Item>
                        <S.Item>
                            <S.Icon src={languages} alt="" />
                            I like to learn new languages.
                        </S.Item>
                    </S.List>
                </S.AboutWrapper>
            </S.About>
        </>
    );
}