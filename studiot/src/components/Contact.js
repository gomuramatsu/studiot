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
            <h2>Contact Us</h2>
            <div className="contact-left" align="right">
              <p class="bigp"><strong>phone: </strong></p>
              <p class="bigp"><strong>email: </strong></p>
            </div>
            <div className="contact-right" align="left">
              <p class="bigp">(905) 475-4247</p>
              <p class="bigp">info@studiot.ca</p>
            </div>
          </div>
        </div>
        : 
        <div>
          <div className="spacedSection">
            <h3>アクセス</h3>
            <div className="contact-left" align="right">
              <p class="bigp"><strong>phone: </strong></p>
              <p class="bigp"><strong>email: </strong></p>
            </div>
            <div className="contact-right" align="left">
              <p class="bigp">(905) 475-4247</p>
              <p class="bigp">info@studiot.ca</p>
            </div>
          </div>
        </div>
        }
      </div>
    );
  }

}

export default Contact;
