import React from 'react';
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { 
        DivNav,
        DivNav1,
        DivNav2
        } from "../Styled-Components/StyledElements";



const NavBar = () => {
    return (
    <div>
        <Router>
            <DivNav>
                <DivNav1>
                <a class="nav-item" href="./">Ki.</a>
                </DivNav1>
                <DivNav2>
                <li>
                    <Link class="nav-item" href="about/">about</Link>
                    <Link class="nav-item" href="#">resume</Link>
                    <Link class="nav-item" href="https://kiyanirandomfinds.substack.com/about?utm_source=menu-dropdown">newsletter</Link>
                    <Link class="nav-item" href="mailto:bamba.kiyani@gmail.com">contact</Link>
                </li>
                </DivNav2>
            </DivNav>
        </Router>
    </div>
    )
}

export default NavBar; 
