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
            <div className="contact-left" align="right">
              <p><strong>Tues - Sat: </strong></p>
              <p><strong>Sun: </strong></p>
              <p><strong>Mon: </strong></p>
            </div>
            <div className="contact-right" align="left">
              <p>10AM - 7PM</p>
              <p>11AM - 6PM</p>
              <p>Closed</p>
            </div>
          </div>
          <div className="spacedSection">
            <h3>Contact Us</h3>
            <div className="contact-left" align="right">
              <p><strong>phone: </strong></p>
              <p><strong>email: </strong></p>
            </div>
            <div className="contact-right" align="left">
              <p>(905) 475-4247</p>
              <p>info@studiot.ca</p>
            </div>
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
            <div className="contact-left" align="right">
              <p><strong>火 - 土 : </strong></p>
              <p><strong>日 : </strong></p>
              <p><strong>月: </strong></p>
            </div>
            <div className="contact-right" align="left">
              <p>10AM - 7PM</p>
              <p>11AM - 6PM</p>
              <p>Closed</p>
            </div>
          </div>
          <div className="spacedSection">
            <h3>アクセス</h3>
            <div className="contact-left" align="right">
              <p><strong>phone: </strong></p>
              <p><strong>email: </strong></p>
            </div>
            <div className="contact-right" align="left">
              <p>(905) 475-4247</p>
              <p>info@studiot.ca</p>
            </div>
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
