import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/js/NavBar';
import SideBar from './Components/js/SideBar';
import MainPanel from "./Components/js/MainPanel";
import Commentaries from "./Components/js/Commentaries";


  
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;