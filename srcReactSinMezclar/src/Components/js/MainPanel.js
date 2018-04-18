import React from "react";
import CammeraCapture from "./CammeraCapture";
import TransformedImage from "./TransformedImage";
import "../css/MainPanel.css";

class MainPanel extends React.Component {
	render () {
		return(
			<div className="row">
				<div className="col-sm-1 col-md-1 col-lg-1 col-xl-1" >
			    </div>
				<div className="col-sm-10 col-md-10 col-lg-4 col-xl-4" >
			      <CammeraCapture />
			    </div>
			    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1" >
			    </div>
			    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1" >
			    </div>
				<div className="col-sm-10 col-md-10 col-lg-4 col-xl-4" >
			      <TransformedImage />
			    </div>
			    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1" >
			    </div>
	  		</div>
  		);
	}
}

export default MainPanel;