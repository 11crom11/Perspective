import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Collapse, CardHeader } from 'reactstrap';
import descripcion_img_1 from '../img/1_imagen_original.jpg';
import descripcion_img_2 from '../img/2_seleccion_area.jpg';
import descripcion_img_3 from '../img/3_result_final.png';
import FaAngellist from 'react-icons/lib/fa/angellist';
import FaQuestion from 'react-icons/lib/fa/question';
import FaCode from 'react-icons/lib/fa/code';
import FaExternalLink from 'react-icons/lib/fa/external-link';
import FaAngleDown from 'react-icons/lib/fa/angle-down';


class Documentacion extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: 0, cards: [1, 2, 3, 4, 5] };
	}

	toggle(e) {
	  let event = e.target.dataset.event;
	  this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
	}

  render() {
  	const {cards, collapse} = this.state;
    return (
      <div>
      	<div>
	          <Card>
	            <CardHeader onClick={this.toggle} data-event={1}><FaAngellist size={40}/>Motivación<FaAngleDown className="float-right" size={40}/></CardHeader>
                <Collapse isOpen={collapse === 1}>

	            <CardBody>
					<p>Este proyecto plantea como iniciativa el desarrollo de una aplicación multimedia que permita la corrección dinámica de la perspectiva de las imágenes captadas por una webcam. Como núcleo medular se busca conseguir la corrección de la perspectiva de una imagen.</p>
					<p>El proyecto otorgará la posibilidad a los usuarios de interactuar con la perspectiva de un vídeo, buscando tanto aprender como dejar reflejado aquello se puede conseguir al hacer un empleo combinado de una serie de diversos conocimientos matemáticos  y tecnológicos.</p>
					<p>Las principales utilidades que hemos encontrado entre otras son:</p>
					<ul>
						<li>Corrección de perspectiva de vídeo en las conferencias.</li>
						<li>Corrección de perspectiva en escaneo de documentos (tickets).</li>
						<li>Visualización de un objeto con la perspectiva correcta: por ejemplo, de una Pizarra girada, ponerla de frente.</li>
						<li>Modificación de la perspectiva de la imagen en función de los deseos del usuario.</li>
						<li>Medición de distancias en imágenes tomadas por cámaras de tráfico [4].</li>
						<li>Contabilización de vehículos en un determinado tramo de carretera [5].</li>
					</ul>
					<p>Los resultados que se pueden conseguir son muy potentes. Además, tenemos la intención de conseguir más y nuevos resultados de manera incremental con el objetivo de investigar y seguir probando en combinación otras herramientas.</p>
	            
	            </CardBody>
	            	        </Collapse>

	          </Card>
        </div>
        <div>
	          <Card>
	            <CardHeader onClick={this.toggle} data-event={2}><FaQuestion size={40}/>Descripción<FaAngleDown className="float-right" size={40}/></CardHeader>
            	<Collapse isOpen={collapse === 2}>
	            <CardBody>
					<p>El elemento de perspectiva es utilizado para hacer referencia a la dimensión de los objetos en una imagen y a la relación espacial que existe entre ellos respecto a un punto de vista. Jugando con la perspectiva se consiguen efectos sorprendentes aplicando distintas transformaciones.</p>
	            	<p>La transformación o distorsión de la perspectiva de una imagen es  la transformación propiamente dicha de un objeto y el área que lo rodea. Esto provoca que el aspecto del conjunto sea distinto respecto a cómo se vería presentado una longitud focal normal [6]. Por lo tanto, juega un papel muy importante el ángulo de visión. Con este proyecto se quiere jugar con el ángulo de visión simulando que una fotografía ha sido, por ejemplo, tomada desde otro punto de vista, como se visualiza en el siguiente ejemplo.</p>
	            	<p>A continuación podemos observar cómo transformamos la perspectiva de una fotografía de la facultad para poder ver las letras de frente. De la misma manera vemos como otras zonas de la foto quedan deformadas, como es el caso de las ventanas.</p>
	            	<img src={descripcion_img_1} width="450" height="350" />
	            	<img src={descripcion_img_2} width="450" height="350" />
	            	<img src={descripcion_img_3} width="450" height="350" />
	            </CardBody>
	            </Collapse>
	          </Card>
        </div>
        <div>
	          <Card>
	            <CardHeader onClick={this.toggle} data-event={3}><FaCode size={40}/>Tecnologías empleadas<FaAngleDown className="float-right" size={40}/></CardHeader>
            	<Collapse isOpen={collapse === 3}>
		            <CardBody>
						<p>La aplicación se va a desarrollar fundamentalmente con tecnologías web. Para recoger el flujo de vídeo de la webcam vamos a utilizar el estándar WebRTC, y para aplicar la transformación de la perspectiva vamos a utilizar una transformación CSS matrix3d tal y como se hace en [2] y [3]. Eso nos garantiza más fluidez en la interacción, ya que estaremos utilizando la tarjeta gráfica para realizar los cálculos para la transformación de las imágenes.</p>
		            </CardBody>
	           	</Collapse>

	          </Card>
        </div>
        <div>
	          <Card>
	            <CardHeader onClick={this.toggle} data-event={4}><FaExternalLink size={40}/>Referencias<FaAngleDown className="float-right" size={40}/></CardHeader>
            	<Collapse isOpen={collapse === 4}>
		            <CardBody>
			            <ul>
							<li>[1]	P. N. Klein, Coding the Matrix: Linear Algebra through Applications to Computer Science, 1 edition. Newton, Mass.: Newtonian Press, 2013.</li>
							<li>[2]	“Perspective Transforms in JavaScript.” [Online]. Available: <a href="https://www.uncorkedstudios.com/blog/perspective-transforms-in-javascript/" rel="nofollow">https://www.uncorkedstudios.com/blog/perspective-transforms-in-javascript/</a>. [Accessed: 28-Feb-2018].</li>
							<li>[3]	“Perspective Transformation.” [Online]. Available: <a href="https://bl.ocks.org/mbostock/10571478" rel="nofollow">https://bl.ocks.org/mbostock/10571478</a>. [Accessed: 28-Feb-2018].</li>
							<li>[4]	 Cámaras de trafico: <a href="https://www.researchgate.net/figure/Figura-2-Ajuste-de-transformacion-de-perspectiva-y-obtencion-de-coordenadas-cartesianas-s_fig1_305755376" rel="nofollow">https://www.researchgate.net/figure/Figura-2-Ajuste-de-transformacion-de-perspectiva-y-obtencion-de-coordenadas-cartesianas-s_fig1_305755376</a>
							</li>
							<li>[5] 	Conteo de tráfico de vehículos en intersecciones: <a href="http://utc.ices.cmu.edu/utc/tier-one-reports/Taylor_TSETFinalReport.pdf" rel="nofollow">http://utc.ices.cmu.edu/utc/tier-one-reports/Taylor_TSETFinalReport.pdf</a>
							</li>
							<li>[6]	Distorsión de la perspectiva: <a href="https://es.wikipedia.org/wiki/Distorsi%C3%B3n_de_la_perspectiva" rel="nofollow">https://es.wikipedia.org/wiki/Distorsi%C3%B3n_de_la_perspectiva</a>
							</li>
						</ul>
		            </CardBody>
	           	</Collapse>

	          </Card>
        </div>
      </div>
    );
  }
}

export default Documentacion;