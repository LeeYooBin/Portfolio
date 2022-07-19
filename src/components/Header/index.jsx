import Navbar from "./Navbar";
import * as S from './HeaderStyle';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <S.Header>
                <Link to='/' style={S.Logo}><h1>Roberdan Santos</h1></Link>
                <Navbar/>
            </S.Header>
        </>
    );
}
