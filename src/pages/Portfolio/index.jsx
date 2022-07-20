import React, { useEffect } from 'react';
import Favorites from "../../components/Favorites";

export default function Portfolio(){
    useEffect(() => {
        document.title = 'Portfolio';
    }, []);

    return(
        <>
            <main>
                <Favorites />
            </main>
        </>
    );
}