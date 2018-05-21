import React from "react";
import "../css/Commentaries.css";
				
const messagesTalker = ['¡Bien hecho!', 
						'¡Perfecto!', 
						 'Mola, ¿verdad?',
						 'Activa la cámara web.',
						 'Dale permisos a tu navegador.', 
						 'No te preocupes.', 
						 'Sólo tu app te verá.', 
						 'No te grabamos.',
						 'Mueve las cuatro esquinas.',
						 'Colocalas en una superficie ladeada.',
						 'El recuadro izquierdo se está transformando.',
						 'El área seleccionada se está viendo de frente.'];

class Commentaries extends React.Component {
	constructor(props){
		super(props);
		this.state = {message: messagesTalker[3]};
	}

	render(){
		return (
			<div id="Commentaries-box">
				<div id="Commentaries">
					{this.state.message}
				</div>
			</div>
		);
	}
}

export default Commentaries;