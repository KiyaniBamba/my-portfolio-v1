import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { MainDiv } from "./Styled-Components/StyledElements";

function App() {
  return (
    <MainDiv >
      <NavBar/>
      <Body/>
      <Footer/>
    </MainDiv>
  );
}

export default App;
