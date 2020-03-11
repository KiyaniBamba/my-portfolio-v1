import styled from "styled-components";

// @media screen and (max-width: 1921px) and (min-width: 1024px)

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
margin-right: 20%;
margin-left: 20%;

@media (max-width: 770px) {
    margin-right: 5%;
    margin-left: 5%;
  }


`

// Styled NavBar : 


export const DivNav = styled.div`
display: flex;
justify-content: space-between;
outline: none;
text-decoration: none;
list-style: none;
background-color: transparent;
padding-top: 50px;
padding-bottom: 50px;
font-weight: bold;
font-size: large;
`; 

export const DivNav2 = styled.div`
    font-weight: bold;
`;

export const DivNav1 = styled.div`
    display: flex;
    text-decoration: none;
    list-style: none;
    font-weight: bold;
`;

// Styled Body :

export const BodyNav = styled.div`
    font-weight: bold;    
    font-size: 65px;
    margin-bottom: 40px;
    padding-top: 100px;
    @media (max-width: 770px) {
        font-size: 35px;
        margin-bottom: 60px;
      }
`;


// Styled Footer : 

export const FooterDiv = styled.div`
    // bottom: 0;
    margin-bottom: 1em;
    margin-top: 100px;
    height: 80px;
    font-weight: bold;
    

    @media (max-width: 770px) {
        margin-right: 5%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        h3 {
            font-size:20px;
        }
      }
`;

export const FooterDivLink = styled.div`
    margin-top: 1em;
    a {
        align-content: space-around;
        text-decoration: none;
        list-style: none;
        color:black;
        margin-right: 15px; 
    }
    @media (max-width: 770px) {
            display: flex;
            flex-direction: column;
            align-content: center;
            margin-bottom: 10px;

            a {
                margin-left: 5px;
            }
        }
`

// Styled About page : 

export const AboutDiv = styled.div`
    margin-top:20%;
    margin-left:20%;
    margin-right:20%;
    margin-bottom:10%;
    margin-top:8%;
    font-weight: bold;
    font-size: 25px;
    @media (max-width: 770px) {
        font-size: 20px;
        margin-left:5%;
        margin-right:5%;
    }

`

export const Image = styled.div`
    display:flex;
    flex-direction: column;
    text-aign:center;
    // padding:15px;
    margin-top: 10%;
`

export const Project = styled.div`
    display: flex;
    margin-bottom: 40px;
    object-fit: contain;
    @media (max-width: 770px) {
        margin-bottom:20px;
    }

    .links-demo {
        display:flex;
        // justify-content: space-evenly;

        a {
            // align-content: space-around;
            text-decoration: none;
            list-style: none;
            color:black;
            font-size: large;
            margin-right: 15px;
        }
        a:hover {
            color: rgb(231, 175, 21);
            text-decoration: none
          }
    }

    .chatbot {
        object-fit: contain;
        background: #222222;
        width: 368px;
        height: 400px;
        @media (max-width: 770px) {
            width: 320px;
        }
    }

    .beyonce-description {
        object-fit: contain;
        width: 368px;
        height: 400px;
        margin-right:30px;
        h2 {
            font-size: 30px;
            font-weight:bold;
        }

        p {
            font-size:15px;
            font-weight: normal;
        }
        h3 {
            font-style: italic;
            font-size:22px;
        }
        @media (max-width: 770px) {
            width: 320px;
        }
    }

    .beyonce {
        object-fit: contain;
        background: #F8E332;
        width: 482px;
        height: 425px;
        @media (max-width: 770px) {
            width: auto;
        }
    }

    .text {
        margin-left: 30px;

        @media (max-width: 770px) {
            margin-left: 0px;
            margin-top: 30px;
            margin-bottom:20px;
        }

        h2 {
            font-size: 30px;
            font-weight:bold;
        }

        p {
            font-size: 15px;
            font-weight: normal;
        }
        h3 {
            font-style: italic;
            font-size:22px;
        }
    }

    h2 {
        font-size:20px;
    }

    p {
        font-size:20px;  
    }


    @media (max-width: 770px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`


export const P = styled.p`
    font-weight: normal;
  `

  export const H1 = styled.h3`
  font-weight: bold;
  font-size: 60px;
`

export const H3 = styled.h3`
  font-weight: bold;
`

export const H2 =styled.h2`
  font-size: 45px;
  font-weight: bold;
`