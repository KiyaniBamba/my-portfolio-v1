import React from "react";
import '../App.css';
import { AboutDiv, Image, P, H3, H2  } from "../Styled-Components/StyledElements";
import gif from "../Styled-Components/giphyhooked.gif";
import moiGiphy from "../Styled-Components/moi_giphy.gif";
import moi from "../Styled-Components/kiph.mp4";

const About = () => {
    return (
        <div> 
        <AboutDiv> 
        I’m a full stack web developer from Côte d'Ivoire, currently studying at Lambda School. 
        <br/>
        <br/>

        I originally planned to be a chemical engineer, but after doing my second internship, I realized that although it was interesting, this was not something I was ready to dedicate my life to (But I still got my diploma). 
        <br/>
        <br/>

        So, I started looking for a more meaningful career. I participated and won a few startups competitions, went through two incubators and I was hook to the startup life. 
        <br/>
        <br/>

        <img src={gif} class="giph" alt="loading..." />
        <br/>
        <br/>

        In order to seriously break into the startup world I needed new skills so I decided to learn to program. I got accepted to Lambda School in August 2019 and never turnt back. 

        <br/>
        <br/>

        My final goal is to be a product manager. Despite the fact that all PM do
        not need to be developpers, learning to program will allow me to better work with engineers on my team.

        <br/>
        <br/>

        In the meantime, I am having fun building side-projects and writing about the (African) tech industry.

        {/* <video class="tab" controls>Your browser does not support the &lt;video&gt; tag.
            <source src={moi}/>
        </video> */}
        </AboutDiv>
        {/* <Image> */}
            <img src={moiGiphy} class="giph" alt="loading..." />
        <br/>
        {/* </Image> */}
        <AboutDiv>
            <H2> Small talk </H2>
            <br/>

            <H3> Where are you from?</H3>
            <P> I am French-Ivoirian and grew up in Abidjan, Côte d'Ivoire. Abidjan is called "Babi la joie" which means "Abidjan the joyful". We have stunning beaches, good music and good food.</P>
            <br/>

            <H3> Any favorite foods? </H3>
            <P>  Impossible question...though I can't say no to a plate of alloco, attieke and chicken choucouya. </P>
            <br/>

            <H3> What books are you reading at the moment? </H3>
            <P>Confessions of an Advertising Man by David Ogilvy and The Art of Game Design by Jesse Schell.</P>
            <br/>

            <H3> Anything you would like to add? </H3>
            <P>I like to say that I play piano even though I didn't play seriously since 2012. I plan to get back to it in 2020 though.</P>
            <br/>



        </AboutDiv>

        </div>
    );
};

export default About 