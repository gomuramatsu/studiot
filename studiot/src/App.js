import React, { Component } from 'react';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import ThermalReconditioning from './components/ThermalReconditioning.js';
import GalleryPage from './components/Gallery.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {currentPage: "home", lang: "en"}

    this.pageHandler = this.pageHandler.bind(this);
    this.languageHandler = this.languageHandler.bind(this);
    this.getLanguage = this.getLanguage.bind(this);
  }

  pageHandler(newPageName) {
    var val = newPageName
    var obj  = {}
    obj["currentPage"] = val
    this.setState(obj)

    console.log("new page: " + newPageName)
  }

  languageHandler(newLanguage) {
    console.log("new language selected: " + newLanguage);
    this.setState({lang: newLanguage});
  }

  getLanguage() {
    return this.state.lang;
  }

  render() {
    return (
      <div className="index">
        <Header />
        <div className="App">
          <div className="body-wrapper">
            <NavBar pageHandler={this.pageHandler} getLanguage={this.getLanguage}/>
            <div className="ContentWrap">
              { this.state.currentPage === "home" ? <Home getLanguage={this.getLanguage} /> : null }
              { this.state.currentPage === "menu" ? <Menu getLanguage={this.getLanguage} /> : null }
              { this.state.currentPage === "thermal" ? <ThermalReconditioning getLanguage={this.getLanguage} /> : null }
              { this.state.currentPage === "gallery" ? <GalleryPage  getLanguage={this.getLanguage} /> : null }
              { this.state.currentPage === "contact" ? <Contact getLanguage={this.getLanguage} /> : null }
            </div>
            <Footer languageHandler={this.languageHandler} getLanguage={this.getLanguage}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
