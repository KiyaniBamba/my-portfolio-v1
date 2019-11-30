import React from 'react';
import '../App.css';
import { FooterDiv, FooterDivLink } from "../Styled-Components/StyledElements";

const Footer = () => {
    return (
        <FooterDiv >
            <h3>
                I'm bad at goodbyes, let's stay in touch.
            </h3>
            <FooterDivLink>
				<a class="nav-item" href="mailto:bamba.kiyani@gmail.com">Email</a>
				<a class="nav-item" href="https://twitter.com/KiyaniBba">Twitter</a>
                <a class="nav-item" href="https://github.com/KiyaniBamba?tab=repositories">Github</a>
                <a class="nav-item" href="https://kiyanirandomfinds.substack.com/about?utm_source=menu-dropdown">Substack</a>
				<a class="nav-item" href="https://medium.com/@bamba.kiyani">Medium</a>

            </FooterDivLink>

        </FooterDiv >
    )
};


export default Footer; 