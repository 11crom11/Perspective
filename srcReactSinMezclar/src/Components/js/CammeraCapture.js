import React from "react";
import '../css/CammeraCapture.css';

class CammeraCapture extends React.Component {
	render(){
		return (
			<img id="camera-capture" className="img-fluid" src = "https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&h=350" />
		);
	}
}

export default CammeraCapture;