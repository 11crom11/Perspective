import React from "react";
import "../css/TransformedImage.css";

class TransformedImage extends React.Component {

	corners;

	state = {
		ready: false
	}

	getCorners(srcCorners) {
		let [x,y] = [500,500]
		let dstCorners = [0, 0, 0, x, x, 0, x, x];
		let perspT = window.PerspT(srcCorners, dstCorners);
		let p1 = perspT.transform(0,0)
		let p2 = perspT.transform(0,y)
		let p3 = perspT.transform(x,y)
		let p4 = perspT.transform(x,0)
		return p1.concat(p4).concat(p2).concat(p3);
	}

	transform2d(elt, x1, y1, x2, y2, x3, y3, x4, y4) {
		var w = elt.offsetWidth, h = elt.offsetHeight;
		var transform = window.PerspT([0, 0, w, 0, 0, h, w, h], [x1, y1, x2, y2, x3, y3, x4, y4]);
		var t = transform.coeffs;
		t = [t[0], t[3], 0, t[6],
				 t[1], t[4], 0, t[7],
				 0   , 0   , 1, 0   ,
				 t[2], t[5], 0, t[8]];
		t = "matrix3d(" + t.join(", ") + ")";
		elt.style.transform = t;
	}

	update() {
		var box = document.getElementById("box");
		this.transform2d(box, this.corners[0], this.corners[1], this.corners[2], this.corners[3],
										 this.corners[4], this.corners[5], this.corners[6], this.corners[7]);
		for (var i = 0; i != 8; i += 2) {
			var elt = document.getElementById("marker" + i);
			elt.style.left = this.corners[i] + "px";
			elt.style.top = this.corners[i + 1] + "px";
		}
	}

	flatCorners(corners) {
		return [corners.p1[0], corners.p1[1], corners.p2[0], corners.p2[1], corners.p3[0], corners.p3[1], corners.p4[0], corners.p4[1]]
	}

	transformCorners(corners){
		this.setState({ready: true})
		this.corners = this.getCorners(this.flatCorners(corners));
		this.update()
	}

	componentDidMount() {
		navigator.mediaDevices.
			getUserMedia({video: true}).
				then((stream) => {
							document.getElementById('transformedVideo').srcObject = stream;
				}).catch(error => console.error);
	}

	render(){
		return (
			<div id="transformed-image">
        <div id="box" className={!this.state.ready ? 'hidden' : ''}>
          <video id="transformedVideo" />
        </div>
        <div id="marker0" className="corner"></div>
        <div id="marker2" className="corner"></div>
        <div id="marker4" className="corner"></div>
        <div id="marker6" className="corner"></div>
      </div>
	  );
	}
}

export default TransformedImage;
