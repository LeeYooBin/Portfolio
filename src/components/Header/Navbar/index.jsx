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
                  <a href="#about" onClick={() => close(open)}>About</a>
                  <a href="#skills" onClick={() => close(open)}>Skills</a>
                  <a href="#hobbies" onClick={() => close(open)}>Hobbies</a>
                  <a href="#education" onClick={() => close(open)}>Education</a>
                  <a href="#projects" onClick={() => close(open)}>Projects</a>
              </S.Menu>
          </S.Navbar>
      </>
  );
}
