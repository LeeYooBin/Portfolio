import Project from '../Project';
import { SubTitle, Portfolio, PortfolioWrapper } from '../../style/Global';
import * as S from './FavoritesStyle';
import { Link } from 'react-router-dom';

export default function Favorites(){
    return(
        <>
            <Portfolio>
                <SubTitle>Favorites Projects</SubTitle>
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
                </PortfolioWrapper>
                <Link to='/Projects' style={S.LinkStyle}><S.PortfolioLink>More projects</S.PortfolioLink></Link>
            </Portfolio>
        </>
    );
}
