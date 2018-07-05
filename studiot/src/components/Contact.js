import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        { this.props.getLanguage() === "en" ? 
        <div>
          <div className="spacedSection">
            <h3>Opening Hours</h3>
            <strong>Tues - Sat: </strong><p>10AM - 7PM</p>
            <strong>Sun: </strong><p>11AM - 6PM</p>
            <strong>Mon: </strong><p>Closed</p>
          </div>
          <div className="spacedSection">
            <h3>Contact Us</h3>
            <strong>phone: </strong><p>(905) 475-4247</p>
            <strong>email: </strong><p>info@studiot.ca</p>
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
        : 
        <div>
          <div className="spacedSection">
            <h3>営業日</h3>
            <p>火 - 土 10AM - 7PM</p>
            <p>日 : 11AM - 6PM</p>
            <p>月: Closed</p>
          </div>
          <div className="spacedSection">
            <h3>アクセス</h3>
            <p>phone: (905) 475-4247</p>
            <p>email: info@studiot.ca</p>
          </div>
          <div className="spacedSection">
            <h3>ロケーション</h3>
            <p>3160 Steeles Avenue East, Markham, L3R 4G9 (at Japan Town)</p>
          </div>
          <iframe
              frameborder="0" style={{border:0}}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBgmwVUaNkm9bJgfZ9-fnnAe_-ZXhWpbLs
              &q=Studio+T,Markham+ON" allowfullscreen>
          </iframe>
        </div>
        }
      </div>
    );
  }

}

export default Contact;
