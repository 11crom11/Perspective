import React from "react";
import '../css/CammeraCapture.css';

import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import Konva from 'konva';


class Point extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Rect
			  name={this.props.name}
        x={20}
        y={20}
        width={5}
        height={5}
        fill={'red'}
        shadowBlur={5}
        onClick={this.handleClick}
				draggable={true}
      />
    );
  }
}

class Background extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = "board.png";
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };
  }

  render() {
    return <Image image={this.state.image} />;
  }
}

class CammeraCapture extends React.Component {

	handleSuccess(stream) {
  		const video = document.querySelectorAll('video');
  		video.forEach(video => {
    		video.srcObject = stream;
  		});
	}

	handleError(error) {
  		console.error('Reeeejected!', error);
	}

	componentDidMount(){
		navigator.mediaDevices.
			getUserMedia({video: true}).
  			then(this.handleSuccess).catch(this.handleError);

		this.refs.stage.getStage().on("dragend", function(e){
			//alert(e.target.name() + " | x: " + e.target.x() + " " + "y: " + e.target.y());
			console.log(e.target.attrs.name + ": (" + e.target.attrs.x + "," + e.target.attrs.y +")");
		});
	}

	render(){//<video autoplay id="camera-capture" className="embed-responsive" ></video>
		return (
			<div id="camera-capture" className="">
				<Stage ref="stage" width="860" height="600">
				<Layer>
					<Background />
				</Layer>
        <Layer>
          <Point name="p1" />
					<Point name="p2" />
					<Point name="p3" />
					<Point name="p4" />
        </Layer>
      </Stage>
			</div>
		);
	}
}

export default CammeraCapture;
