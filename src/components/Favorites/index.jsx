import { SubTitle } from '../../style/Global';
import { AiTwotoneStar } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './style.css';

export default function Favorites(){
    return(
        <>
            <section className="favs">
                <SubTitle>Favorites Projects</SubTitle>
                <div className="wrapper">
                    <div className="project">
                        <h1 className='title'><AiTwotoneStar className='star'/>Recipes</h1>
                        <nav className='links'>
                            <a className='link' href="https://github.com/LeeYooBin/Recipes">code</a>
                            <p>/</p>
                            <a className='link' href="https://leeyoobin.github.io/Recipes/">demo</a>
                        </nav>
                        <p className='text'>
                            Recipe site using React Js, styled-components, code versioning
                            with git and github pages for hosting.
                        </p>
                    </div>

                    <div className="project">
                        <h1 className='title'><AiTwotoneStar className='star'/>Dog Page</h1>
                        <nav className='links'>
                            <a className='link' href="https://github.com/LeeYooBin/Dog-page">code</a>
                        </nav>
                        <p className='text'>
                            Page built with React Js that loads a random image of a dog from
                            an API.
                        </p>
                    </div>

                    <div className="project">
                        <h1 className='title'><AiTwotoneStar className='star'/>Popular Movies</h1>
                        <nav className='links'>
                            <a className='link' href="https://github.com/LeeYooBin/Popular-movies">code</a>
                        </nav>
                        <p className='text'>
                            Site that loads the most popular movies from an API and uses localStorage
                            to save favorites.
                        </p>
                    </div>

                    <div className="project">
                        <h1 className='title'><AiTwotoneStar className='star'/>Portflow</h1>
                        <nav className='links'>
                            <a className='link' href="https://github.com/LeeYooBin/Portflow">code</a>
                            <p>/</p>
                            <a className='link' href="https://leeyoobin.github.io/Portflow/">demo</a>
                        </nav>
                        <p className='text'>
                            Arts site using React Js, styled-components and github pages for hosting.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}