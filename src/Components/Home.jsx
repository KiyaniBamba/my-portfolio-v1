import React from 'react';
import { BodyNav, H3, Image, Project } from "../Styled-Components/StyledElements";
import chatbot from "../Styled-Components/elements/chatbot.gif";

const Body = () => {
    return (
        <BodyNav>
            Hi, I am Ki. <br/>
            I'm a french-ivoirian full stack developer, and I like to build fun and useful things. 
            <br/>
            <br/>
            <H3> A few examples: </H3>
            <Image>
                <Project>
                <div >
                    <img  src={chatbot} className="chatbot" alt="loading..." />  
                </div>  
                <div className="text">
                    <h2>
                        Sarah - an EdTech Chatbot
                    </h2>
                    
                    <p>
                        <br/>
                    In 2017, I read an alarming article on the number of early pregnancies in high schools in Côte d'Ivoire. When I read this article, I jumped to the conclusion that it came from a lack of sex education, so I built Sarah. Sarah is a chatbot targeting young Ivorians aged 9 to 18. It is created in Messenger and makes it possible to inform young people in a fun way about their relations with the opposite sex. <br/>
                    <br/>

                    It was tested with a group of high school girls. After a series of interviews with these young girls, I realized that my solution was not the one they needed and I closed the bot. I wrote about my though process in an article (it's in french <i class="em em-laughing" aria-role="presentation" aria-label="SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"></i> ).
                    </p>
                    <div className="links-demo">
                    <a href="https://kiyanibamba.com/2018/10/"> Article. </a>
                    <a href="https://app.botsociety.io/s/5ba3aab753567c07abee2ecd?p=f2ce95c3850bdce978637e78392916832a583eb9"> Demo. </a>
                    </div>

                </div>
                </Project>
                <Project>
                <div>
                    <h2>
                        Beyoncé's assistant - a RPG Game
                    </h2>
                    <p>
                        Description
                    </p>
                    <p>
                        Product. Github. Draft.
                    </p>
                </div>
                <div>
                    image
                </div>

                </Project>
                <Project>
                <div>
                    image
                </div>
                <div>
                    <h2>
                        We Go further - Online Community 
                    </h2>
                    <p>
                        Description
                    </p>
                    <p>
                        Github. Product Roadmap. 
                    </p>
                </div>
                </Project>
            </Image>

        </BodyNav>
    )
};

export default Body