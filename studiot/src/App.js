import React, { Component } from 'react';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import GalleryPage from './components/Gallery.js';
import ProductPage from './components/ProductPage.js';
import Contact from './components/Contact.js';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {currentPage: "home"}

    this.pageHandler = this.pageHandler.bind(this)
  }

  pageHandler(newPageName) {
    var val = newPageName
    var obj  = {}
    obj["currentPage"] = val
    this.setState(obj)

    console.log("new page: " + newPageName)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <NavBar pageHandler = {this.pageHandler}/>
          <div className="ContentWrap">
            { this.state.currentPage === "home" ? <Home /> : null }
            { this.state.currentPage === "menu" ? <Menu /> : null }
            { this.state.currentPage === "gallery" ? <GalleryPage /> : null }
            { this.state.currentPage === "products" ? <ProductPage /> : null }
            { this.state.currentPage === "contact" ? <Contact /> : null }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
