import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

class Footer extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="custom-footer">
      	{ this.props.getLanguage() === "en" ? <p><a onClick={() => this.props.languageHandler("jp")}>日本語</a></p> : <p><a onClick={() => this.props.languageHandler("en")}>English</a></p>}
      	<p>Copyright © 2005 - 2022 STUDiO T. All Rights Reserved.</p>
      </div>
    );
  }

}

export default Footer;
