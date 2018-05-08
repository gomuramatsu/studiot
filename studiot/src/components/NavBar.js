import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

class NavBar extends Component {
  
  render() {
    return (
      <div>
        <Navbar inverse fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand >
              <a onClick = {() => this.props.pageHandler("home")}>Studio T</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick = {() => this.props.pageHandler("menu")}>
                Menu
              </NavItem>
              <NavItem onClick = {() => this.props.pageHandler("gallery")}>
                Gallery
              </NavItem>
              <NavItem onClick = {() => this.props.pageHandler("products")}>
                Products
              </NavItem>
              <NavItem onClick = {() => this.props.pageHandler("contact")}>
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}

export default NavBar;
