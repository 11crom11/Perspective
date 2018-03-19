//--VARIABLES----------------------------------------------
var width = window.innerWidth;
var height = window.innerHeight;
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
	//imagen de un punto
	imageObj = new Image();
	imageObj.src = "cuadrado.jpg";


	//los 4 puntos
	punto1 = new Konva.Image({
		image: imageObj,
		x: 0 + imageObj.x,
		y: stage.getHeight() - imageObj.y,
		width: 50,
		height: 50,
		draggable: true
	});

	punto2 = new Konva.Image({
		image: imageObj,
		x: 0 + imageObj.x,
		y: 0 + imageObj.y,
		width: 50,
		height: 50,
		draggable: true
	});

	punto3 = new Konva.Image({
		image: imageObj,
		x: stage.getWidth() - imageObj.x,
		y: 0 + imageObj.y,
		width: 50,
		height: 50,
		draggable: true
	});

	punto4 = new Konva.Image({
		image: imageObj,
		x: stage.getWidth() - imageObj.x,
		y: stage.getHeight() - imageObj.y,
		width: 50,
		height: 50,
		draggable: true
	});

	layer.add(punto1);
	layer.add(punto2);
	layer.add(punto3);
	layer.add(punto4);

	//stage.add(layer);
	stage.add(layer, dragLayer);
};

//evento de arrastrar punto
stage.on('dragstart', function(evt) {
  var shape = evt.target;
  // moving to another layer will improve dragging performance
  shape.moveTo(dragLayer);
  stage.draw();
  
  if (tween) {
    tween.pause();
  }
  shape.setAttrs({
    shadowOffset: {
      x: 15,
      y: 15
    },
    scale: {
      x: shape.getAttr('startScale') * 1.2,
      y: shape.getAttr('startScale') * 1.2
    }
  });
});

//evento de soltar un punto
stage.on('dragend', function(evt) {
  var shape = evt.target;
  shape.moveTo(layer);
  stage.draw();
  shape.to({
    duration: 0.5,
    easing: Konva.Easings.ElasticEaseOut,
    scaleX: shape.getAttr('startScale'),
    scaleY: shape.getAttr('startScale'),
    shadowOffsetX: 5,
    shadowOffsetY: 5
  });
});