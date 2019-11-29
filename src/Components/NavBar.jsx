import React from 'react';
import '../App.css';
import { 
    DivNav,
    DivNav1,
    DivNav2
    } from "../Styled-Components/StyledNavBar";

const NavBar = () => {
    return (
    <div>
        <DivNav>
        <nav class="navbar navbar-light">
        
			
        <DivNav1>
        <a class="nav-item" href="./">Ki.</a>
        </DivNav1>
            <DivNav2>
            <li>
				<a class="nav-item" href="about/">about</a>
				<a class="nav-item" href="#">resume</a>
                <a class="nav-item" href="contact/">newsletter</a>
				<a class="nav-item" href="contact/">contact</a>
			</li>
            </DivNav2>
        </nav>
        </DivNav>
    </div>
    )
}

export default NavBar; 
