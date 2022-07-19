import * as S from './MainStyle';
import profile from '../../assets/img/profile.jpg';

export default function Main(){
    return(
        <>
            <S.Main>
                <S.Profile src={profile} alt="Profile image" />
                <S.TextWrapper>
                    <S.Article>
                        <h1>Hi, I'm Roberdan.</h1>
                        <p>
                            I'm a computer science student who decided
                            to follow the programming path.
                            <br />
                            I've got academic experience in Web Development.
                            I work with projects involving websites building,
                            APIs and database. I'm currently focusing on frontend technologies.
                        </p>
                    </S.Article>
                    <S.Links>
                        <h3>Let's connect</h3>
                        <p>You can find me on
                            <S.Link href='https://github.com/LeeYooBin' target="_blank"> Github</S.Link>,
                            <S.Link href='https://www.linkedin.com/in/roberdan-santos/' target="_blank"> Linkedin</S.Link>,
                            <S.Link href='https://www.instagram.com/roberdantamyr/' target="_blank"> Instagram</S.Link> and
                            <S.Link href='#' target="_blank"> Twitter</S.Link>.
                        </p>
                    </S.Links>
                </S.TextWrapper>
            </S.Main>
        </>
    );
}
