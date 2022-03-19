import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;