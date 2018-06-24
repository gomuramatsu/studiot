import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';
import logo from '../images/logo/StudioT-logo-RGB.eps';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

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
              { this.props.getLanguage() === "en" ? <div>Menu</div> : <div>メニュー</div> }
            </NavItem>
            <NavItem onClick = {() => this.props.pageHandler("thermal")}>
              { this.props.getLanguage() === "en" ? <div>TR/Hair Straightening</div> : <div>縮毛矯正</div> }
            </NavItem>
            <NavItem onClick = {() => this.props.pageHandler("gallery")}>
              { this.props.getLanguage() === "en" ? <div>Gallery</div> : <div>スタイルギャラリー</div> }
            </NavItem>
            <NavItem onClick = {() => this.props.pageHandler("contact")}>
              { this.props.getLanguage() === "en" ? <div>Contact</div> : <div>予約</div> }
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
