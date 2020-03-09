import styled from "styled-components";

// @media screen and (max-width: 1921px) and (min-width: 1024px)

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
margin-right: 20%;
margin-left: 20%;

@media (max-width: 600px) {
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
    @media (max-width: 600px) {
        font-size: 35px;
        margin-bottom: 60px;
      }
`;


// Styled Footer : 

export const FooterDiv = styled.div`
    // bottom: 0;
    margin-bottom: 3em;
    margin-top: 40px;
    height: 80px;
    font-weight: bold;
    // margin-right: 20%;
    // margin-left: 20%;
    

    @media (max-width: 600px) {
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
        margin-left: 15px; 
    }
    @media (max-width: 600px) {
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
    @media (max-width: 600px) {
        font-size: 20px;
        margin-left:5%;
        margin-right:5%;
    }

`

export const Image = styled.div`
    border: 2px solid black;
    text-aign:center;
    padding:15px;
    margin-top: 10%;
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