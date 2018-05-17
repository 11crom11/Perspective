import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/js/NavBar';
import SideBar from './Components/js/SideBar';
import MainPanel from "./Components/js/MainPanel";
import Commentaries from "./Components/js/Commentaries";
import Joyride from 'react-joyride'
class App extends Component {
  
  constructor(props){
  	super(props);
  	this.state = {
  		run: true,
  		steps: [
  			{target: 'body',
  			content: '¿Quieres que te expliquemos como funciona?',
  			placement: 'bottom'},
  			{target: '.recording-circle',
  			content: 'En primer lugar, asegurate de que tu cámara está activada.',
  			disableBeacon: true,
  			placement: 'bottom'},
  			{target: '.recording-circle',
  			content: 'Si el marcador es gris, está apagada.',
  			disableBeacon: true,
  			placement: 'bottom'},
        {target: '.recording-circle',
        content: 'Si es rojo, encendida.',
        disableBeacon: true,
        placement: 'bottom'},
  			{target: '.recording-circle',
  			content: 'Si está apagada, actívala y refresca la página.',
  			disableBeacon: true,
  			placement: 'bottom'},
  			{target: '#camera-capture',
  			content: 'Si tu cámara está activada, verás aquí lo que se está recogiendo.',
  			disableBeacon: true,
  			placement: 'bottom'},
  			{target: '#camera-capture',
        content: 'Y tranquilo, que no te grabamos.',
        disableBeacon: true,
        placement: 'bottom'},
        {target: '#camera-capture',
  			content: 'Podrás observar cuatro puntos y un recuadro.',
  			disableBeacon: true,
  			placement: 'bottom'},
  			{target: '#camera-capture',
  			content: '¡Prueba a mover un punto!',
  			disableBeacon: true,
  			placement: 'bottom'},
  			{target: '#transformed-image',
  			content: 'Verás que aquí se producen cambios de forma instantánea.',
  			placement: 'bottom'},
  			{target: '#transformed-image',
  			content: 'Ahora, juega libremente con los cuatro puntos.',
  			disableBeacon: true,
  			placement: 'bottom'},
  			{target: '#transformed-image',
  			content: '¡Diviertete y experimenta con las posibilidades!',
  			disableBeacon: true,
  			placement: 'bottom'}
  		]
  	};
  }

  handleCallback = data => {
    const { action, index, type } = data;
  };

  render() {
  	const { steps, run } = this.state;
    return (
      <div className="App">
        <NavBar />
        <MainPanel />
        <Joyride
        	  continuous
            scrollToFirstStep
          	showProgress
          	showSkipButton
          	steps={steps}
          	run={run}
          	callback={this.handleCallback}/>
      </div>
    );
  }
}

export default App;
