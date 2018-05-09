import React from "react";
import '../css/CammeraCapture.css';

import { render } from 'react-dom';
import { Stage, Layer, Rect, Image } from 'react-konva';

import imgCirc1 from '../img/circulo1.png';
import imgCirc2 from '../img/circulo2.png';
import imgCirc3 from '../img/circulo3.png';
import imgCirc4 from '../img/circulo4.png';
import iconoGitHub from '../img/github-icon.svg';

class Circulo1Image extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = imgCirc1;
    image.onload = () => {
      this.setState({
        image: image
      })
    }
  }

  render(){
    return(    
      <Image 
        image={this.state.image}
        name="p1"
        x={10}
        y={10}
        width={25}
        height={25}
        shadowBlur={5}
        draggable={true}

        onDragEnd={function (){
          alert(this.attrs.x);
        }}
      />) 
  }
}

class Circulo2Image extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = imgCirc2;
    image.onload = () => {
      this.setState({
        image: image
      })
    }
  }

  render(){
    return(    
      <Image 
        image={this.state.image}
        name="p2"
        x={10}
        y={455}
        width={25}
        height={25}
        shadowBlur={5}
        draggable={true}

        onDragEnd={function (){
        alert(this.attrs.x);
        }}

      />) 
  }
}

class Circulo3Image extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = imgCirc3;
    image.onload = () => {
      this.setState({
        image: image
      })
    }
  }

  render(){
    return(    
      <Image 
        image={this.state.image}
         name="p3"
        x={455}
        y={10}
        width={25}
        height={25}
        shadowBlur={5}
        draggable={true}

        onDragEnd={function (){
        alert(this.attrs.x);
        }}

      />) 
  }
}

class Circulo4Image extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = imgCirc4;
    image.onload = () => {
      this.setState({
        image: image
      })
    }
  }

  render(){
    return(    
      <Image 
        image={this.state.image}
         name="p4"
        x={455}
        y={455}
        width={25}
        height={25}
        shadowBlur={5}
        draggable={true}

        onDragEnd={function (){
        alert(this.attrs.x);
        }}

      />) 
  }
}

/*class Point1 extends React.Component {

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
}*/

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

    //this.refs.stage.node.on('dragmove', function(){alert("MEC")});
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
          <Circulo1Image />
					<Circulo2Image />
					<Circulo3Image />
					<Circulo4Image />
        </Layer>
      </Stage>
			</div>
		);
	}
}

export default CammeraCapture;
