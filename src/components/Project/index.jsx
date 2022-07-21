import * as S from './ProjectStyle';
import { AiTwotoneStar } from 'react-icons/ai';

export default function Project({title, code, app, text}){
    return(
        <>
            <S.Project>
                <S.Title>
                    <AiTwotoneStar style={S.Star}/>
                    <span>{title}</span>
                </S.Title>
                <S.Links>
                    <S.Link href={code}>code</S.Link>
                    <p>/</p>
                    <S.Link href={app}>demo</S.Link>
                </S.Links>
                <S.Text>
                    {text}
                </S.Text>
            </S.Project>
        </>
    );
}