import React, { useEffect } from 'react';
import AboutText from '../../components/AboutText';
import Skills from '../../components/Skills';
import Hobbies from '../../components/Hobbies';
import Education from '../../components/Education';

export default function About(){

    useEffect(() => {
        document.title = 'About';
    }, []);

    return(
        <>
            <main>
                <AboutText />
                <Skills />
                <Hobbies />
                <Education />
            </main>
        </>
    );
}