import { GlobalStyle } from "../../style/Global";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Header from "../../components/Header";
import Projects from '../../components/Projects';
import Main from "../Main";
import About from "../About";
import Portfolio from "../Portfolio";

export default function Home(){
    return(
        <>
            <Router>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Portfolio" element={<Portfolio />}></Route>
                    <Route path="/Projects" element={<Projects />}></Route>
                </Routes>
            </Router>
        </>
    );
}
