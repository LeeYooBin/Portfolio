import Project from '../Project';
import { SubTitle, Portfolio, PortfolioWrapper } from '../../style/Global';

export default function Projects(){
    return(
        <>
            <Portfolio>
                <SubTitle>Front-End</SubTitle>
                <PortfolioWrapper>
                    <Project
                        title={'Recipes'}
                        code={"https://github.com/LeeYooBin/Recipes"}
                        app={"https://leeyoobin.github.io/Recipes/"}
                        text={`Recipe site using React Js, styled-components, code versioning
                        with git and github pages for hosting.`}
                    />
                    <Project
                        title={'Dog Page'}
                        code={"https://github.com/LeeYooBin/Dog-page"}
                        app={"#"}
                        text={`Page built with React Js that loads a random image of a dog from
                        an API.`}
                    />
                    <Project
                        title={'Popular Movies'}
                        code={"https://github.com/LeeYooBin/Popular-movies"}
                        app={"#"}
                        text={`Site that loads the most popular movies from an API and uses localStorage
                        to save favorites.`}
                    />
                    <Project
                        title={'Desenvolvimento sustentável'}
                        code={"https://github.com/LeeYooBin/Desenvolvimento-Sustentavel"}
                        app={"https://62dc7faf1cba5366e65fb91f--glittering-chaja-fe26b7.netlify.app/"}
                        text={`My version of the United Nations Goal Cards using React JS and Netlify for hosting.`}
                    />
                    <Project
                        title={'Portflow'}
                        code={"https://github.com/LeeYooBin/Portflow"}
                        app={"https://leeyoobin.github.io/Portflow/"}
                        text={`Arts site using React Js, styled-components and github pages for hosting.`}
                    />
                    <Project
                        title={'Decoder'}
                        code={"https://github.com/LeeYooBin/Decodificador"}
                        app={"https://leeyoobin.github.io/Decodificador/"}
                        text={`Decoder for the Oracle Next Education program using HTML, CSS and Javascript.`}
                    />
                    <Project
                        title={'VnW Technical challenge'}
                        code={"https://github.com/LeeYooBin/VnW-desafio-tecnico"}
                        app={"#"}
                        text={`Selection process for Vai na Web studio.`}
                    />
                </PortfolioWrapper>
            </Portfolio>
        </>
    );
}