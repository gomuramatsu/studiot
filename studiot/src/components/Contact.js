import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div>
        <div className="spacedSection">
          <h3>Opening Hours</h3>
          <p>Tues - Sat: 10AM - 7PM</p>
          <p>Sun: 11AM - 6PM</p>
          <p>Mon: Closed</p>
        </div>
        <div className="spacedSection">
          <h3>Contact Us</h3>
          <p>phone: (905) 475-4247</p>
          <p>email: info@studiot.ca</p>
        </div>
        <div className="spacedSection">
          <h3>Location</h3>
          <p>3160 Steeles Avenue East, Markham, L3R 4G9 (at Japan Town)</p>
        </div>
        <iframe
            width="600"
            height="450"
            frameborder="0" style={{border:0}}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBgmwVUaNkm9bJgfZ9-fnnAe_-ZXhWpbLs
            &q=Studio+T,Markham+ON" allowfullscreen>
        </iframe>
      </div>
    );
  }

}

export default Contact;
