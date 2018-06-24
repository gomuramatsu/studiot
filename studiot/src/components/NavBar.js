import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';
import logo from '../images/logo/StudioT-logo-RGB.eps';

class NavBar extends Component {
  
  render() {
    return (
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand >
            <img src="/images/logo/studiot_logo.png" onClick = {() => this.props.pageHandler("home")} / >
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem onClick = {() => this.props.pageHandler("menu")}>
              Menu
            </NavItem>
            <NavItem onClick = {() => this.props.pageHandler("thermal")}>
              TR/Hair Straightening
            </NavItem>
            <NavItem onClick = {() => this.props.pageHandler("gallery")}>
              Gallery
            </NavItem>
            <NavItem onClick = {() => this.props.pageHandler("contact")}>
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
