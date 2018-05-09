import React from 'react';
import '../css/NavBar.css';
import iconoGitHub from '../img/github-icon.svg';
import FaBeer from 'react-icons/lib/fa/beer';
import FaGithub from 'react-icons/lib/fa/github';
import TiDocumentText from 'react-icons/lib/ti/document-text';
import GoBug from 'react-icons/lib/go/bug';
import MdContact from 'react-icons/lib/md/contact-mail';
import MdLogo from 'react-icons/lib/md/center-focus-weak';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><MdLogo size={50}/>Perspective</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/"><TiDocumentText size={40}/>Documentación</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"><GoBug size={40}/>Desarrolladores</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"><MdContact size={40}/>  Contacto</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/11crom11/Perspective"><FaGithub size={40}/>Proyecto</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;