import React from 'react';
import '../css/SideBar.js';
class SideBar extends React.Component {
	
	componentDidMount(){
		/**
		 * Created by Kupletsky Sergey on 17.10.14.
		 *
		 * Material Sidebar (Profile menu)
		 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
		 * You can use this sidebar in Bootstrap (v3) projects. HTML-markup like Navbar bootstrap component will make your work easier.
		 * Dropdown menu and sidebar toggle button works with JQuery and Bootstrap.min.js
		 */

		// Sidebar toggle
		//
		// -------------------
		$(document).ready(function() {
		    var overlay = $('.sidebar-overlay');

		    $('.sidebar-toggle').on('click', function() {
		        var sidebar = $('#sidebar');
		        sidebar.toggleClass('open');
		        if ((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')) {
		            overlay.addClass('active');
		        } else {
		            overlay.removeClass('active');
		        }
		    });

		    overlay.on('click', function() {
		        $(this).removeClass('active');
		        $('#sidebar').removeClass('open');
		    });

		});

		// Sidebar constructor
		//
		// -------------------
		$(document).ready(function() {

		    var sidebar = $('#sidebar');
		    var sidebarHeader = $('#sidebar .sidebar-header');
		    var sidebarImg = sidebarHeader.css('background-image');
		    var toggleButtons = $('.sidebar-toggle');

		    // Hide toggle buttons on default position
		    toggleButtons.css('display', 'none');
		    $('body').css('display', 'table');


		    // Sidebar position
		    $('#sidebar-position').change(function() {
		        var value = $( this ).val();
		        sidebar.removeClass('sidebar-fixed-left sidebar-fixed-right sidebar-stacked').addClass(value).addClass('open');
		        if (value == 'sidebar-fixed-left' || value == 'sidebar-fixed-right') {
		            $('.sidebar-overlay').addClass('active');
		        }
		        // Show toggle buttons
		        if (value != '') {
		            toggleButtons.css('display', 'initial');
		            $('body').css('display', 'initial');
		        } else {
		            // Hide toggle buttons
		            toggleButtons.css('display', 'none');
		            $('body').css('display', 'table');
		        }
		    });

		    // Sidebar theme
		    $('#sidebar-theme').change(function() {
		        var value = $( this ).val();
		        sidebar.removeClass('sidebar-default sidebar-inverse sidebar-colored sidebar-colored-inverse').addClass(value)
		    });

		    // Header cover
		    $('#sidebar-header').change(function() {
		        var value = $(this).val();

		        $('.sidebar-header').removeClass('header-cover').addClass(value);

		        if (value == 'header-cover') {
		            sidebarHeader.css('background-image', sidebarImg)
		        } else {
		            sidebarHeader.css('background-image', '')
		        }
		    });
		});

		/**
		 * Created by Kupletsky Sergey on 08.09.14.
		 *
		 * Add JQuery animation to bootstrap dropdown elements.
		 */

		(function($) {
		    var dropdown = $('.dropdown');

		    // Add slidedown animation to dropdown
		    dropdown.on('show.bs.dropdown', function(e){
		        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
		    });

		    // Add slideup animation to dropdown
		    dropdown.on('hide.bs.dropdown', function(e){
		        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
		    });
		})(jQuery);



		(function(removeClass) {

			jQuery.fn.removeClass = function( value ) {
				if ( value && typeof value.test === "function" ) {
					for ( var i = 0, l = this.length; i < l; i++ ) {
						var elem = this[i];
						if ( elem.nodeType === 1 && elem.className ) {
							var classNames = elem.className.split( /\s+/ );

							for ( var n = classNames.length; n--; ) {
								if ( value.test(classNames[n]) ) {
									classNames.splice(n, 1);
								}
							}
							elem.className = jQuery.trim( classNames.join(" ") );
						}
					}
				} else {
					removeClass.call(this, value);
				}
				return this;
			}

		})(jQuery.fn.removeClass);
	}

	render() {
		return (
			<div>
				<div className="sidebar-overlay"></div>
				<aside id="sidebar" className="sidebar sidebar-default open" role="navigation">
				    <div className="sidebar-header header-cover" style="background-image: url(https://2.bp.blogspot.com/-2RewSLZUzRg/U-9o6SD4M6I/AAAAAAAADIE/voax99AbRx0/s1600/14%2B-%2B1%2B%281%29.jpg);">
				        <div className="top-bar"></div>
				        <button type="button" className="sidebar-toggle">
				            <i className="icon-material-sidebar-arrow"></i>
				        </button>
				        <div className="sidebar-image">
				            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg"/>
				        </div>
				        <a data-toggle="dropdown" className="sidebar-brand" href="#settings-dropdown">
				            john.doe@gmail.com
				            <b className="caret"></b>
				        </a>
				    </div>
				    <ul className="nav sidebar-nav">
				        <li className="dropdown">
				            <ul id="settings-dropdown" className="dropdown-menu">
				                <li>
				                    <a href="#" tabindex="-1">
				                        Profile
				                    </a>
				                </li>
				                <li>
				                    <a href="#" tabindex="-1">
				                        Settings
				                    </a>
				                </li>
				                <li>
				                    <a href="#" tabindex="-1">
				                        Help
				                    </a>
				                </li>
				                <li>
				                    <a href="#" tabindex="-1">
				                        Exit
				                    </a>
				                </li>
				            </ul>
				        </li>
				        <li>
				            <a href="#">
				                <i className="sidebar-icon md-inbox"></i>
				                Inbox
				            </a>
				        </li>
				        <li>
				            <a href="#">
				                <i className="sidebar-icon md-star"></i>
				                Starred
				            </a>
				        </li>
				        <li>
				            <a href="#">
				                <i className="sidebar-icon md-send"></i>
				                Sent Mail
				            </a>
				        </li>
				        <li>
				            <a href="#">
				                <i className="sidebar-icon md-drafts"></i>
				                Drafts
				            </a>
				        </li>
				        <li className="divider"></li>
				        <li className="dropdown">
				            <a className="ripple-effect dropdown-toggle" href="#" data-toggle="dropdown">
				                All Mail
				                <b className="caret"></b>
				            </a>
				            <ul className="dropdown-menu">
				                <li>
				                    <a href="#" tabindex="-1">
				                        Social
				                        <span className="sidebar-badge">12</span>
				                    </a>
				                </li>
				                <li>
				                    <a href="#" tabindex="-1">
				                        Promo
				                        <span className="sidebar-badge">0</span>
				                    </a>
				                </li>
				            </ul>
				        </li>
				        <li>
				            <a href="#">
				                Trash
				                <span className="sidebar-badge">3</span>
				            </a>
				        </li>
				        <li>
				            <a href="#">
				                Spam
				                <span className="sidebar-badge">456</span>
				            </a>
				        </li>
				        <li>
				            <a href="#">
				                Follow Up
				                <span className="sidebar-badge badge-circle">i</span>
				            </a>
				        </li>
				    </ul>
				</aside>

				<div className="wrapper">
				    <div className="constructor">
				        <h2 className="headline">Material Sidebar (Profile menu)</h2>
				        <p className="subhead">Based on <a href="https://www.google.com/design/spec/material-design/introduction.html" target="_blank">Material Design by Google</a>.</p>
				        <p>Icons from <a href="https://zavoloklom.github.io/material-design-iconic-font" target="_blank">Material Design Iconic Font</a></p>
				        <p>Tested on Win8.1 with browsers: Chrome 37,  Firefox 32, Opera 25, IE 11, Safari 5.1.7</p>
				        <hr />
				        <p>You can use this sidebar in Bootstrap (v3) projects. HTML-markup like <a href="https://getbootstrap.com/components/#navbar" target="_blank">Navbar bootstrap component</a> will make your work easier.</p>
				        <p>Dropdown menu and sidebar toggle button works with JQuery and Bootstrap.min.js</p>
				        <hr />
				        <h2 className="headline">Sidebar Constructor</h2>
				        <p>
				            <label for="sidebar-position">Sidebar postion</label>
				            <select id="sidebar-position" name="sidebar-position">
				                <option value="">Default</option>
				                <option value="sidebar-fixed-left">Float on left</option>
				                <option value="sidebar-fixed-right">Float on right</option>
				                <option value="sidebar-stacked">Stacked on left</option>
				            </select>
				        </p>
				        <p>
				            <label for="sidebar-theme">Sidebar theme</label>
				            <select id="sidebar-theme" name="sidebar-theme">
				                <option value="sidebar-default">Default</option>
				                <option value="sidebar-inverse">Inverse</option>
				                <option value="sidebar-colored">Colored</option>
				                <option value="sidebar-colored-inverse">Colored-Inverse</option>
				            </select>
				        </p>
				        <p>
				            <label for="sidebar-header">Sidebar header cover</label>
				            <select id="sidebar-header" name="sidebar-header">
				                <option value="header-cover">Image cover</option>
				                <option value="">Color cover</option>
				            </select>
				        </p>
				        <p><button className="sidebar-toggle">Toggle sidebar</button></p>
				    </div>
				</div>
			</div>
		);
	}
}

export default SideBar;

/*
Estoy explorando una alternativa gratuita al SideBar de MDB, pues el suyo es exclusivo de la versión pro. 
Creo que es de uso libre. https://codepen.io/zavoloklom/pen/dIgco.
Me falla el código jQuery, que no sé integrarlo de momento.
*/