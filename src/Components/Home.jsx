import React from 'react';
import { BodyNav, H3, Image, Project } from "../Styled-Components/StyledElements";
import chatbot from "../Styled-Components/elements/chatbot.gif";
import beyonce from "../Styled-Components/elements/beyonce.gif";

const Body = () => {
    return (
        <BodyNav>
            Hi, I am Ki. <br/>
            I'm a french-ivoirian full stack developer, and I like to build things. 
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
                        Sarah 
                    </h2>
                    <h3>an EdTech Chatbot</h3>
                    
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
                <div className="beyonce-description">
                    <h2>
                        Being Beyoncé's Assistant 
                    </h2>
                    <h3>a RPG Game</h3>

                    
                    <p>
                        <br/>
                        This game train you to become Beyoncé’s assistant. We all know that Beyoncé is extremely demanding and she only works with the best among the best. On each "Bee case" you have to answer a multiple choice question. The goal is to answer the 10 questions correctly.
                        <br/><br/>
                        But if you make a mistake, you are immediately fired. And because Beyoncé doesn't give a second chance, you can't try again unless you create a new account.

                    </p>
                    <div className="links-demo">
                        <a href="https://github.com/Online-Game-CS/cs-bw1-frontend"> Github. </a>
                        <a href="https://beyonce-game.bambakiyani.now.sh/"> Demo. </a>
                        <a href="https://docs.google.com/document/d/1HJ_kgUshFXdGEEOQyALa_dVbzo1HRTB5ejyxOTf9wLc/edit?usp=sharing"> Product doc. </a>
                    </div>

                </div>
                <div >
                    <img  src={beyonce} className="beyonce" alt="loading..." />  
                </div>  

                </Project>
                {/* <Project>
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
                </Project> */}
            </Image>

        </BodyNav>
    )
};

export default Body