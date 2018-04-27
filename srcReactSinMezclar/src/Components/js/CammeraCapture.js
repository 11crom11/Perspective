import React from "react";
import '../css/CammeraCapture.css';

import { render } from 'react-dom';
import { Stage, Layer, Rect, Image } from 'react-konva';

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
        y={480}
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
        x={480}
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
        x={480}
        y={480}
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

	componentDidMount(){
		window.p1 = [10,10];
		window.p2 = [10,480];
		window.p3 = [480,10];
		window.p4 = [480,480];
		this.refs.stage.getStage().on("dragend", e => {
			window[e.target.attrs.name] = [e.target.attrs.x, e.target.attrs.y]
			this.props.onPointChanged({
				p1: window.p1,
				p2: window.p2,
				p3: window.p3,
				p4: window.p4
			})
		});
	}

	constructor(...args) {
		super(...args);
		let video = document.createElement('video');

		navigator.mediaDevices.
			getUserMedia({video: true}).
				then((stream) => {
							video.srcObject = stream;
				}).catch(error => console.error);

		this.state = {
			video: video
		};
		video.addEventListener('canplay', () => {
			video.play();
			this.image.getLayer().batchDraw();
			this.requestUpdate();
		});
	}
	requestUpdate = () => {
		this.image.getLayer().batchDraw();
		requestAnimationFrame(this.requestUpdate);
	}

	render(){
		return (
			<div id="camera-capture" className="">
				<Stage ref="stage" width="500" height="500">
				<Layer>
				  <Image
							ref={node => { this.image = node; }}
							x={0} y={0} width={500} height={500}
							image={this.state.video}
					/>
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
