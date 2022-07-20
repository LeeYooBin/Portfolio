import React, { useState } from 'react';
import * as S from './NavBarStyle';
import { Link } from "react-router-dom";

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
                    <Link to='/' onClick={() => close(open)}>Home</Link>
                    <Link to='/About' onClick={() => close(open)}>About</Link>
                    <Link to='/Portfolio' onClick={() => close(open)}>Portfolio</Link>
                    <a href='#' onClick={() => close(open)}>Contact</a>
                </S.Menu>
            </S.Navbar>
        </>
    );
}
