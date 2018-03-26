import React from 'react';
import '../css/NavBar.css';

class NavBar extends React.Component {
	render() {
		return (
		<nav className="navbar navbar-expand-lg navbar-dark primary-color fixed-top scrolling-navbar">
	    	<div className="float-left">
                <a className="button-collapse sidebar-toggle"><i className="fa fa-bars"></i></a>
            </div>
	    	<div className="text-centerer">
	    		<h1 className="header-text">
	    			Perspective Patata
	    		</h1>
	    	</div>
		</nav>);
	}
}

export default NavBar;