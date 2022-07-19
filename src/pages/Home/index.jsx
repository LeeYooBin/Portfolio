import { GlobalStyle } from "../../style/Global";
import Header from "../../components/Header";
import Main from "../../components/Main";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Hobbies from "../../components/Hobbies";

export default function Home(){
    return(
        <>
            <GlobalStyle />
            <Header />
            <Main />
            <About />
            <Skills />
            <Hobbies />
        </>
    );
}
