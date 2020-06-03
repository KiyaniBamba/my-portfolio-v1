import React from "react";
import '../App.css';
import { AboutDiv, Image, P, H3, H2  } from "../Styled-Components/StyledElements";
import gif from "../Styled-Components/giphyhooked.gif";
import moiGiphy from "../Styled-Components/moi_giphy.gif";

const About = () => {
    return (
        <div> 
        <AboutDiv> 
        I work in product and I'm also a full stack web developer. 
        <br/>
        <br/>

        For the little story, I originally planned to do something totally different. I wanted to be a chemical engineer (!). However, after my second internship, I realized that although it was interesting, this was not something I was ready to dedicate my life to - Still, I graduated. 
        <br/>
        <br/>

        Anyhow, armed with my strong analytical and communication skills from my engineering degree, I started looking for a more meaningful career. I participated and won a few startups competitions, went through two incubators and I was hook to the startup life. 
        <br/>
        <br/>

        <img src={gif} class="giph" alt="loading..." />
        <br/>
        <br/>

        In order to seriously break into the startup world I needed new skills so I decided to learn to program. I was accepted into Lambda School's full stack web development cohort in August 2019 and never looked back.

        <br/>
        <br/>
        My ultimate goal is to work as a product manager in a fast growing startup. I know I didn't need to be a developer to become a product manager, but learning how to program has given me a better understanding of how software works and will allowed me to work better with the engineers on my team.

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
            <P> I am French-Ivoirian and grew up in Abidjan, Côte d'Ivoire. Abidjan is called "Babi la joie" which means "Abidjan the joyful". We have stunning beaches, good music and good food. You should visit!</P>
            <br/>

            <H3> Any favorite foods? </H3>
            <P>  Impossible question...though I can't say no to a plate of alloco, attieke and chicken choucouya. </P>
            <br/>

            <H3> What books are you reading at the moment? </H3>
            <P>The Art of doing science and engineering by Richard W. Hamming and The old man and the sea by Ernest Hemingway.</P>
            <br/>

            <H3> Anything you would like to add? </H3>
            <P>I like to say that I play piano even though I didn't play seriously since 2012. I plan to get back to it in 2021 though.</P>
            <br/>



        </AboutDiv>

        </div>
    );
};

export default About 