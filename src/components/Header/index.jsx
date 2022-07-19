import Navbar from "./Navbar";
import * as S from './HeaderStyle';
import './style.css';

export default function Header(){
    return(
        <>
            <S.Header>
                <S.Logo href="#" ><h1>Roberdan Santos</h1></S.Logo>
                <Navbar/>
            </S.Header>
        </>
    );
}
