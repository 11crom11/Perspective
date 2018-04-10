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

var linea12;
var linea23;
var linea34;
var linea41;

var coordenadasDic = {};

var imageObj;


//--FUNCIONES----------------------------------------------

function drawPuntos(){
	var divRecuadro_pos = $( "#recuadro" ).position();

	creacionPuntos(divRecuadro_pos);
	creacionLineas(divRecuadro_pos);

	inicializarEstructuraCoordenadas();

    //Este hilo gestionará el evento de repintado de las lineas a medida que se mueven los puntos
    Concurrent.Thread.create(actualizarLineas);	

	stage.add(layer);
	stage.add(layer, dragLayer);

	//evento que ocurre tras dejar de arrastrar
	stage.on("dragend", function(e){
		alert(e.target.name() + " | x: " + e.target.x() + " " + "y: " + e.target.y());
		actualizarDicCoordenadas(e.target);
	});
};

function creacionPuntos(div_elem){
	//imagen de un punto
	imageObj = new Image();
	//imageObj.src = "cuadrado.png";
	imageObj.src = "circulo.png";
	imageObj.width = 25;
	imageObj.height = 25;


	//los 4 puntos
	punto1 = new Konva.Image({
		image: imageObj,
		x: div_elem.left,
		y: div_elem.top,
		width: imageObj.width,
		height: imageObj.height,
		draggable: true,
		name: "punto1"
	});

	punto2 = new Konva.Image({
		image: imageObj,
		x: div_elem.left,
		y: div_elem.top + stage.getHeight() - imageObj.height - 16,
		width: imageObj.width,
		height: imageObj.height,
		draggable: true,
		name: "punto2"
	});

	punto3 = new Konva.Image({
		image: imageObj,
		x: div_elem.left + stage.getWidth() - imageObj.width - 16,
		y: div_elem.top + stage.getHeight() - imageObj.height - 16,
		width: imageObj.width,
		height: imageObj.height,
		draggable: true,
		name: "punto3"
	});

	punto4 = new Konva.Image({
		image: imageObj,
		x: div_elem.left + stage.getWidth() - imageObj.width - 16,
		y: div_elem.top,
		width: imageObj.width,
		height: imageObj.height,
		draggable: true,
		name: "punto4"
	});

	layer.add(punto1);
	layer.add(punto2);
	layer.add(punto3);
	layer.add(punto4);	
}

function creacionLineas(){
	linea12 = new Konva.Line({
		points: [punto1.attrs.x + imageObj.width/2, punto1.attrs.y + imageObj.height/2, punto2.attrs.x + imageObj.width/2, punto2.attrs.y + imageObj.height/2],
		stroke: 'red',
		strokeWidth: 5,
		lineCap: 'round',
		lineJoin: 'round',
		/*
		* line segments with a length of 29px with a gap
		* of 20px followed by a line segment of 0.001px (a dot)
		* followed by a gap of 20px
		*/
		dash: [29, 20, 0.001, 20]
    });

	linea23 = new Konva.Line({
		points: [punto2.attrs.x + imageObj.width/2, punto2.attrs.y + imageObj.height/2, punto3.attrs.x + imageObj.width/2, punto3.attrs.y + imageObj.height/2],
		stroke: 'red',
		strokeWidth: 5,
		lineCap: 'round',
		lineJoin: 'round',
		/*
		* line segments with a length of 29px with a gap
		* of 20px followed by a line segment of 0.001px (a dot)
		* followed by a gap of 20px
		*/
		dash: [29, 20, 0.001, 20]
    });

	linea34 = new Konva.Line({
		points: [punto3.attrs.x + imageObj.width/2, punto3.attrs.y + imageObj.height/2, punto4.attrs.x + imageObj.width/2, punto4.attrs.y + imageObj.height/2],
		stroke: 'red',
		strokeWidth: 5,
		lineCap: 'round',
		lineJoin: 'round',
		/*
		* line segments with a length of 29px with a gap
		* of 20px followed by a line segment of 0.001px (a dot)
		* followed by a gap of 20px
		*/
		dash: [29, 20, 0.001, 20]
    });

	linea41 = new Konva.Line({
		points: [punto4.attrs.x + imageObj.width/2, punto4.attrs.y + imageObj.height/2, punto1.attrs.x + imageObj.width/2, punto1.attrs.y + imageObj.height/2],
		stroke: 'red',
		strokeWidth: 5,
		lineCap: 'round',
		lineJoin: 'round',
		/*
		* line segments with a length of 29px with a gap
		* of 20px followed by a line segment of 0.001px (a dot)
		* followed by a gap of 20px
		*/
		dash: [29, 20, 0.001, 20]
    });

    layer.add(linea12);
	layer.add(linea23);
	layer.add(linea34);
	layer.add(linea41);
}

function inicializarEstructuraCoordenadas(){
	coordenadasDic[punto1.name()] = {};
	coordenadasDic["punto1"]["x"] = punto1.attrs.x;
	coordenadasDic["punto1"]["y"] = punto1.attrs.y;
	coordenadasDic[punto2.name()] = {};
	coordenadasDic["punto2"]["x"] = punto2.attrs.x;
	coordenadasDic["punto2"]["y"] = punto2.attrs.y;
	coordenadasDic[punto3.name()] = {};
	coordenadasDic["punto3"]["x"] = punto3.attrs.x;
	coordenadasDic["punto3"]["y"] = punto3.attrs.y;
	coordenadasDic[punto4.name()] = {};
	coordenadasDic["punto4"]["x"] = punto4.attrs.x;
	coordenadasDic["punto4"]["y"] = punto4.attrs.y;
}

function actualizarDicCoordenadas(target){
	coordenadasDic[target.name()]["x"] = target.x();
	coordenadasDic[target.name()]["y"] = target.y();
};

function actualizarLineas(){
	punto1.on('dragmove', function () {
		coordenadasDic[punto1.name()]["x"] = punto1.attrs.x;
		coordenadasDic[punto1.name()]["y"] = punto1.attrs.y;


		linea12.attrs.points = [coordenadasDic[punto1.name()]["x"] + imageObj.width/2, coordenadasDic[punto1.name()]["y"] + imageObj.height/2, coordenadasDic[punto2.name()]["x"] + imageObj.width/2, coordenadasDic[punto2.name()]["y"] + imageObj.height/2];
		linea41.attrs.points = [coordenadasDic[punto4.name()]["x"] + imageObj.width/2, coordenadasDic[punto4.name()]["y"] + imageObj.height/2, coordenadasDic[punto1.name()]["x"] + imageObj.width/2, coordenadasDic[punto1.name()]["y"] + imageObj.height/2];

		linea12.draw();
		linea41.draw();
    });

	punto2.on('dragmove', function () {
		coordenadasDic[punto2.name()]["x"] = punto2.attrs.x;
		coordenadasDic[punto2.name()]["y"] = punto2.attrs.y;


		linea23.attrs.points = [coordenadasDic[punto2.name()]["x"] + imageObj.width/2, coordenadasDic[punto2.name()]["y"] + imageObj.height/2, coordenadasDic[punto3.name()]["x"] + imageObj.width/2, coordenadasDic[punto3.name()]["y"] + imageObj.height/2];
		linea12.attrs.points = [coordenadasDic[punto1.name()]["x"] + imageObj.width/2, coordenadasDic[punto1.name()]["y"] + imageObj.height/2, coordenadasDic[punto2.name()]["x"] + imageObj.width/2, coordenadasDic[punto2.name()]["y"] + imageObj.height/2];

		linea23.draw();
		linea12.draw();
	});

	punto3.on('dragmove', function () {
		coordenadasDic[punto3.name()]["x"] = punto3.attrs.x;
		coordenadasDic[punto3.name()]["y"] = punto3.attrs.y;


		linea34.attrs.points = [coordenadasDic[punto3.name()]["x"] + imageObj.width/2, coordenadasDic[punto3.name()]["y"] + imageObj.height/2, coordenadasDic[punto4.name()]["x"] + imageObj.width/2, coordenadasDic[punto4.name()]["y"] + imageObj.height/2];
		linea23.attrs.points = [coordenadasDic[punto2.name()]["x"] + imageObj.width/2, coordenadasDic[punto2.name()]["y"] + imageObj.height/2, coordenadasDic[punto3.name()]["x"] + imageObj.width/2, coordenadasDic[punto3.name()]["y"] + imageObj.height/2];

		linea34.draw();
		linea23.draw();
    });

	punto4.on('dragmove', function () {
		coordenadasDic[punto4.name()]["x"] = punto4.attrs.x;
		coordenadasDic[punto4.name()]["y"] = punto4.attrs.y;


		linea34.attrs.points = [coordenadasDic[punto3.name()]["x"] + imageObj.width/2, coordenadasDic[punto3.name()]["y"] + imageObj.height/2, coordenadasDic[punto4.name()]["x"] + imageObj.width/2, coordenadasDic[punto4.name()]["y"] + imageObj.height/2];
		linea41.attrs.points = [coordenadasDic[punto4.name()]["x"] + imageObj.width/2, coordenadasDic[punto4.name()]["y"] + imageObj.height/2, coordenadasDic[punto1.name()]["x"] + imageObj.width/2, coordenadasDic[punto1.name()]["y"] + imageObj.height/2];

		linea34.draw();
		linea41.draw();
	});
};