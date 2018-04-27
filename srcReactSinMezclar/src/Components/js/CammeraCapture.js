import React from "react";
import '../css/CammeraCapture.css';

import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import Konva from 'konva';


class Point1 extends React.Component {
  render() {
    return (
      <Rect
			  name="p1"
        x={10}
        y={10}
        width={5}
        height={5}
        fill={'red'}
        shadowBlur={5}
				draggable={true}
      />
    );
  }
}

class Point2 extends React.Component {
  render() {
    return (
      <Rect
			  name="p2"
        x={10}
        y={590}
        width={5}
        height={5}
        fill={'red'}
        shadowBlur={5}
				draggable={true}
      />
    );
  }
}

class Point3 extends React.Component {
  render() {
    return (
      <Rect
			  name="p3"
        x={590}
        y={10}
        width={5}
        height={5}
        fill={'red'}
        shadowBlur={5}
				draggable={true}
      />
    );
  }
}

class Point4 extends React.Component {
  render() {
    return (
      <Rect
			  name="p4"
        x={590}
        y={590}
        width={5}
        height={5}
        fill={'red'}
        shadowBlur={5}
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
				<Stage ref="stage" width="600" height="600">
				<Layer>
					<Background />
				</Layer>
        <Layer>
          <Point1 />
					<Point2 />
					<Point3 />
					<Point4 />
        </Layer>
      </Stage>
			</div>
		);
	}
}

export default CammeraCapture;
