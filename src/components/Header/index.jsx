import Navbar from "./Navbar";
import * as S from './HeaderStyle';
import logo from '../../assets/img/logo.PNG';

export default function Header(){
    return(
        <>
            <S.Header>
                <a href="#"><S.Logo src={logo} alt="logo" /></a>
                <Navbar/>
            </S.Header>
        </>
    );
}
