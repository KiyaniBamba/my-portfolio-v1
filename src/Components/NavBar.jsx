import React from 'react';
import '../App.css';

import {
    NavLink,
    Link
  } from "react-router-dom";
import { 
        DivNav,
        DivNav1,
        DivNav2
        } from "../Styled-Components/StyledElements";



const NavBar = () => {
    return (
    <div>
            <DivNav>
                <DivNav1>
                <a class="nav-item" href="./">Ki.</a>
                </DivNav1>
                <DivNav2>
                    <a class="nav-item" href="/about"> about </a>
                    <a class="nav-item" href="https://drive.google.com/file/d/1yrZzwqLCI-AveEYRcZy9U54llgXWI3yr/view?usp=sharing">resume</a>
                    <a class="nav-item" href="https://medium.com/@bamba.kiyani">medium</a>
                    <a class="nav-item" href="mailto:bamba.kiyani@gmail.com"> email</a>
                </DivNav2>
            </DivNav>
    </div>
    )
}

export default NavBar; 
