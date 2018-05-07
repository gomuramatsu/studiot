import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

class NavBar extends Component {
  
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Nav>
            <NavItem onClick = {() => this.props.pageHandler("home")}>
              StudioT
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem onClick = {() => this.props.pageHandler("menu")}>
              Menu
            </NavItem>
            <NavItem>
              Gallery
            </NavItem>
            <NavItem>
              Products
            </NavItem>
            <NavItem>
              Contact
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }

}

export default NavBar;
