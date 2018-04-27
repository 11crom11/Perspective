import React from "react";
import CammeraCapture from "./CammeraCapture";
import TransformedImage from "./TransformedImage";
import "../css/MainPanel.css";

class MainPanel extends React.Component {
	render () {
		return(
			<div className="row wrapper">
				<div className="col-sm-10 col-md-10 col-lg-6 col-xl-6" >
			      <CammeraCapture onPointChanged={corners => {this.transformed.transformCorners(corners)}} />
			    </div>
				<div className="col-sm-10 col-md-10 col-lg-6 col-xl-6" >
			      <TransformedImage ref={transformed => { this.transformed = transformed}} />
			    </div>
	  		</div>
  		);
	}
}

export default MainPanel;
