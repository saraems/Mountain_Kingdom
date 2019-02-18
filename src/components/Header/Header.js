import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header>
          <nav>
            <div className="mobile_nav">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className="nav">
              <li>About</li>
              <li>Offer</li>
              <li>
                <h1><i className="far fa-circle"></i></h1>
              </li>
              <li className='li_right'>Gallery</li>
              <li className='li_right'>Contact</li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
