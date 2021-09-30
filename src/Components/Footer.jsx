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
				<a  href="mailto:bamba.kiyani@gmail.com">Email</a>
                <a  href="https://github.com/KiyaniBamba?tab=repositories">GitHub</a>
				<a  href="https://bamba-kiyani.medium.com/">Medium</a>
                <a  href="https://kiyani.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile">Substack</a>
				<a  href="https://twitter.com/KiyaniBba">Twitter</a>

            </FooterDivLink>

        </FooterDiv >
    )
};


export default Footer; 
