import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
	}
	
  render() {
    return (
      <div>
      	<img className="home-picture" src="/images/home.jpg" />
      </div>
    );
  }

}

export default Home;
