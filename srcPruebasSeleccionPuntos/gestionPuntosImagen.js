//--VARIABLES----------------------------------------------
var divRecuadro = $( "#recuadro" );

//var width = window.innerWidth;
//var height = window.innerHeight;
var width = divRecuadro.width();
var height = divRecuadro.height();

var stage = new Konva.Stage({
	container: 'recuadro',
	width: width,
	height: height
});

var layer = new Konva.Layer();
var dragLayer = new Konva.Layer();

var tween = null;

	//--PUNTOS--------------
var punto1;
var punto2;
var punto3;
var punto4;

var imageObj;


//--FUNCIONES----------------------------------------------

function drawPuntos(){
	var divRecuadro_pos = $( "#recuadro" ).position();

	//imagen de un punto
	imageObj = new Image();
	imageObj.src = "cuadrado.jpg";


	//los 4 puntos
	punto1 = new Konva.Image({
		image: imageObj,
		x: divRecuadro_pos.left,
		y: divRecuadro_pos.top,
		width: imageObj.width,
		height: imageObj.height,
		draggable: true,
		name: "punto1"
	});

	punto2 = new Konva.Image({
		image: imageObj,
		x: divRecuadro_pos.left,
		y: divRecuadro_pos.top + stage.getHeight() - imageObj.height - 16,
		width: imageObj.width,
		height: imageObj.height,
		draggable: true,
		name: "punto2"
	});

	punto3 = new Konva.Image({
		image: imageObj,
		x: divRecuadro_pos.left + stage.getWidth() - imageObj.width - 16,
		y: divRecuadro_pos.top + stage.getHeight() - imageObj.height - 16,
		width: imageObj.width,
		height: imageObj.height,
		draggable: true,
		name: "punto3"
	});

	punto4 = new Konva.Image({
		image: imageObj,
		x: divRecuadro_pos.left + stage.getWidth() - imageObj.width - 16,
		y: divRecuadro_pos.top,
		width: imageObj.width,
		height: imageObj.height,
		draggable: true,
		name: "punto4"
	});

	layer.add(punto1);
	layer.add(punto2);
	layer.add(punto3);
	layer.add(punto4);

	stage.add(layer);
	stage.add(layer, dragLayer);
};

//evento que ocurre tras dejar de arrastrar
stage.on("dragend", function(e){
	alert("x: " + e.target.x() + " " + "y: " + e.target.y());
})