import React, { Component } from 'react';
import '../App.css';
import home from '../images/home.jpg';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
	}

  render() {
    return (
      <div>
      	<img className="home-picture" src={home} />
      </div>
    );
  }
}

export default Home;
