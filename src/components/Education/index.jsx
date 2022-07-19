import { SubTitle } from "../../style/Global";
import * as S from './EducationStyle';
import ufs from '../../assets/img/ufs .png';
import vnw from '../../assets/img/vnw.png';

import './style.css';

export default function Education(){
    return(
        <>
            <S.Education id="education">
                <SubTitle>Education</SubTitle>
                <S.EducationWrapper>
                    <S.Space>
                        <S.ImgWrapper>
                            <S.Img src={ufs} alt="UFS" />
                        </S.ImgWrapper>
                        <S.H4>Computer Science</S.H4>
                        <p>In progress - UFS</p>
                    </S.Space>
                    <S.Space>
                        <S.ImgWrapper>
                            <S.Img src={vnw} alt="Vai na Web" />
                        </S.ImgWrapper>
                        <S.H4>Front end Development</S.H4>
                        <p>In progress - Vai na Web</p>
                    </S.Space>
                </S.EducationWrapper>
            </S.Education>
        </>
    );
}