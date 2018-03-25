import React from 'react';
import '../css/NavBar.css';

class NavBar extends React.Component {
	render() {
		return (
		<nav className="navbar navbar-expand-lg navbar-dark primary-color">
	    	<a className="navbar-brand" href="#">
	    		<i className="fa fa-bars">
	    		</i>
	    	</a>
	    	<div className="text-centerer">
	    		<h1 className="header-text">
	    			Perspective
	    		</h1>
	    	</div>
		</nav>);
	}
}

export default NavBar;