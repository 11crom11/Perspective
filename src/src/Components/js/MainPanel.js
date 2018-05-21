import React from "react";
import CammeraCapture from "./CammeraCapture";
import TransformedImage from "./TransformedImage";
import "../css/MainPanel.css";
import Joyride from 'react-joyride';

class MainPanel extends React.Component {
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
	  			content: 'Si el marcador es de color rojo, la cámara lo está.',
	  			disableBeacon: true,
	  			placement: 'bottom'},

		        {target: '.recording-circle',
		        content: 'Si por el contrario es de color gris, la cámara está desactivda. Deberás activarla y refrescar la imagen.',
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

	  			{target: '#camera-capture',
	  			content: 'Ahora, juega libremente con los cuatro puntos.',
	  			disableBeacon: true,
	  			placement: 'bottom'},

	  			{target: '.logoPerspective',
	  			content: '¡Diviertete y experimenta con las posibilidades!',
	  			disableBeacon: true,
	  			placement: 'bottom'}
	  		]
	  	};
	  }

	  handleCallback = data => {
	    const { action, index, type } = data;
	  };
	render () {
		const { steps, run } = this.state;

		return(
			<div className="row wrapper">
				<div className="col-sm-10 col-md-10 col-lg-6 col-xl-6" >
			      <CammeraCapture onPointChanged={corners => {this.transformed.transformCorners(corners)}} />
			    </div>
				<div className="col-sm-10 col-md-10 col-lg-6 col-xl-6" >
			      <TransformedImage ref={transformed => { this.transformed = transformed}} />
			    </div>
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

export default MainPanel;
