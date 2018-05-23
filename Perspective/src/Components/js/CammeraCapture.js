import React from "react";
import '../css/CammeraCapture.css';

import { render } from 'react-dom';
import { Stage, Layer, Rect, Image, Line } from 'react-konva';

import imgCirc1 from '../img/circulo1.png';
import imgCirc2 from '../img/circulo2.png';
import imgCirc3 from '../img/circulo3.png';
import imgCirc4 from '../img/circulo4.png';
import iconoGitHub from '../img/github-icon.svg';

var coordenadasDic = {};
coordenadasDic['p1'] = {};
coordenadasDic['p1']['x']= 10;
coordenadasDic['p1']['y']= 10;
coordenadasDic['p2'] = {};
coordenadasDic['p2']['x']= 10;
coordenadasDic['p2']['y']= 455;
coordenadasDic['p3'] = {};
coordenadasDic['p3']['x']= 455;
coordenadasDic['p3']['y']= 10;
coordenadasDic['p4'] = {};
coordenadasDic['p4']['x']= 455;
coordenadasDic['p4']['y']= 455;

var TAMIMGCIR = 30;

class Circulo1Image extends React.Component {
  state = {
    image: null
  };

  linea12;

  myCallBackLinea12 = () => {}

  constructor(props, linea, actualizar) {
    
    super(props)
    
    this.linea12 = linea;
    this.myCallBackLinea12 = actualizar
   
  }

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
        x={coordenadasDic['p1']['x']}
        y={coordenadasDic['p1']['y']}
        width={TAMIMGCIR}
        height={TAMIMGCIR}
        shadowBlur={5}
        draggable={true}

        onDragMove={function (){
          //alert(this.attrs.x);
          coordenadasDic[this.attrs.name]['x'] = this.attrs.x;
          coordenadasDic[this.attrs.name]['y'] = this.attrs.y;
          

          //this.props.linea12.actualizarLinea12();
          //alert(Linea12.points);
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
        x={coordenadasDic['p2']['x']}
        y={coordenadasDic['p2']['y']}
        width={TAMIMGCIR}
        height={TAMIMGCIR}
        shadowBlur={5}
        draggable={true}

        onDragEnd={function (){
          //alert(this.attrs.x);
          coordenadasDic[this.attrs.name]['x'] = this.attrs.x;
          coordenadasDic[this.attrs.name]['y'] = this.attrs.y;
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
        x={coordenadasDic['p3']['x']}
        y={coordenadasDic['p3']['y']}
        width={TAMIMGCIR}
        height={TAMIMGCIR}
        shadowBlur={5}
        draggable={true}

        onDragEnd={function (){
          //alert(this.attrs.x);
          coordenadasDic[this.attrs.name]['x'] = this.attrs.x;
          coordenadasDic[this.attrs.name]['y'] = this.attrs.y;
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
        x={coordenadasDic['p4']['x']}
        y={coordenadasDic['p4']['y']}
        width={TAMIMGCIR}
        height={TAMIMGCIR}
        shadowBlur={5}
        draggable={true}

        onDragEnd={function (){
          //alert(this.attrs.x);
          coordenadasDic[this.attrs.name]['x'] = this.attrs.x;
          coordenadasDic[this.attrs.name]['y'] = this.attrs.y;
        }}

      />) 
  }
}

class Linea12 extends React.Component {


  constructor(props) {
    
    super(props)
    
    this.sate = {
      cambioCoordenadas: 0
    };
   
  }

  actualizarLinea12(){
    if(this.state.cambioCoordenadas == 0){
      this.setState({cambioCoordenadas: 1});
    }
    else{
      this.setState({cambioCoordenadas: 1});
    }
  }


  render(){
    return (
      <Line
        points={[
        (coordenadasDic['p1']['x'] + TAMIMGCIR/2), 
        (coordenadasDic['p1']['y'] + TAMIMGCIR/2),
        (coordenadasDic['p2']['x'] + TAMIMGCIR/2),
        (coordenadasDic['p2']['y'] + TAMIMGCIR/2)]
        }
        stroke={'red'}
        strokeWidth={5}
        lineCap={'round'}
        lineJoin={'round'}
        dash={[29, 20, 0.001, 20]}

        />)
  }
}

class Linea24 extends React.Component {

  render(){
    return (
      <Line
        points={[
        (coordenadasDic['p2']['x'] + TAMIMGCIR/2), 
        (coordenadasDic['p2']['y'] + TAMIMGCIR/2),
        (coordenadasDic['p4']['x'] + TAMIMGCIR/2),
        (coordenadasDic['p4']['y'] + TAMIMGCIR/2)]
        }
        stroke={'red'}
        strokeWidth={5}
        lineCap={'round'}
        lineJoin={'round'}
        dash={[29, 20, 0.001, 20]}

        />)
  }
}

class Linea43 extends React.Component {

  render(){
    return (
      <Line
        points={[
        (coordenadasDic['p4']['x'] + TAMIMGCIR/2), 
        (coordenadasDic['p4']['y'] + TAMIMGCIR/2),
        (coordenadasDic['p3']['x'] + TAMIMGCIR/2),
        (coordenadasDic['p3']['y'] + TAMIMGCIR/2)]
        }
        stroke={'red'}
        strokeWidth={5}
        lineCap={'round'}
        lineJoin={'round'}
        dash={[29, 20, 0.001, 20]}

        />)
  }
}

class Linea31 extends React.Component {

  render(){
    return (
      <Line
        points={[
        (coordenadasDic['p3']['x'] + TAMIMGCIR/2), 
        (coordenadasDic['p3']['y'] + TAMIMGCIR/2),
        (coordenadasDic['p1']['x'] + TAMIMGCIR/2),
        (coordenadasDic['p1']['y'] + TAMIMGCIR/2)]
        }
        stroke={'red'}
        strokeWidth={5}
        lineCap={'round'}
        lineJoin={'round'}
        dash={[29, 20, 0.001, 20]}

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
			
      //window[e.target.attrs.name] = [e.target.attrs.x , e.target.attrs.y]

      if(e.target.attrs.name === 'p1'){
        window[e.target.attrs.name] = [e.target.attrs.x + TAMIMGCIR/2 , e.target.attrs.y + TAMIMGCIR/2];
      }
      else if(e.target.attrs.name === 'p2'){
        window[e.target.attrs.name] = [e.target.attrs.x + TAMIMGCIR/2 , e.target.attrs.y - TAMIMGCIR/2];
      }
      else if(e.target.attrs.name === 'p3'){
        window[e.target.attrs.name] = [e.target.attrs.x + TAMIMGCIR/2 , e.target.attrs.y + TAMIMGCIR/2];
      }
      else if(e.target.attrs.name === 'p4'){
        window[e.target.attrs.name] = [e.target.attrs.x + TAMIMGCIR/2 , e.target.attrs.y - TAMIMGCIR/2];
      }
      
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
          <Circulo1Image linea={<Linea12 />}/>
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
