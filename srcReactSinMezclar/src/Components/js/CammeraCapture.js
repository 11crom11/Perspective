import React from "react";
import '../css/CammeraCapture.css';

import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import Konva from 'konva';


class Point extends React.Component {
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

		this.refs.stage.getStage().on("dragend", e => {
			console.log(this)
			window[e.target.attrs.name] = [e.target.attrs.x, e.target.attrs.y]
			this.props.onPointChanged({
				p1:window.p1||[0,0],
				p2: window.p2||[0,0],
				p3: window.p3||[0,0],
				p4: window.p4||[0,0]
			})
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
          <Point name="p1" ref="p1" />
					<Point name="p2" ref="p2" />
					<Point name="p3" ref="p3" />
					<Point name="p4" ref="p4" />
        </Layer>
      </Stage>
			</div>
		);
	}
}

export default CammeraCapture;
