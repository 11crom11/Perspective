import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/js/NavBar';
import SideBar from './Components/js/SideBar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar/>
        <NavBar/>
      </div>
    );
  }
}

export default App;
