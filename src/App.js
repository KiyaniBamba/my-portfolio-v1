import React from 'react';
import './App.css';
import {Route, Redirect, Switch} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { MainDiv } from "./Styled-Components/StyledElements";


function App() {
  return (
    <MainDiv >
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Footer/>
    </MainDiv>
  );
}

export default App;
