import React, { useState } from 'react';
import * as S from './NavBarStyle';

export default function Navbar() {


    const [open, setOpen] = useState(false);

    const close = open => setOpen(openState => openState ? !openState : openState);

    return (
        <>
            <S.Navbar open={open}>
                <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </S.StyledBurger>

                <S.Menu open={open}>
                    <a href="#" onClick={() => close(open)}>About</a>
                    <a href="#" onClick={() => close(open)}>Portfolio</a>
                    <a href="#" onClick={() => close(open)}>Contact</a>
                </S.Menu>
            </S.Navbar>
        </>
    );
}
