import { GlobalStyle } from "../../style/Global";
import Header from "../../components/Header";
import Main from "../../components/Main";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Hobbies from "../../components/Hobbies";
import Education from "../../components/Education";

export default function Home(){
    return(
        <>
            <GlobalStyle />
            <Header />
            <Main />
            <About />
            <Skills />
            <Hobbies />
            <Education />
        </>
    );
}
