import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "../src/components/footer";
import CardGroup from "../src/components/cardgroup";
import Timeline from "../src/components/timeline";
import Header from  "../src/components/header";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Timeline />
        <Footer/>
      </div>
    );
  }
}

export default App;
