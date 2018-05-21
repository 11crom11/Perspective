import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/*Importar las paginas aqui*/
import App from './App';

/**
* Las rutas se ponen aqui
* IMPORTANTE: recordar hacer los imports correspondientes
*/
export default (
	<Route exact path="/" component={App} />
);