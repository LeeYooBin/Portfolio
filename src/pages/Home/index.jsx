import { GlobalStyle } from "../../style/Global";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Header from "../../components/Header";
import Main from "../Main";


export default function Home(){
    return(
        <>
            <Router>
                <GlobalStyle />
                <Header />

                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                </Routes>
            </Router>
        </>
    );
}
