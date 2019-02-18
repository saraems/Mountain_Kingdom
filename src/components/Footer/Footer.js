import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer>
          <section className="copy_rights_container">
            <div className="copy_rights">
              &copy;2019 Mountain kingdom
            </div>
          </section>
          <section className="privacy_container">
            <div className="privacy">
              Cookies | Privacy
            </div>
          </section>
          <section className="designed_by_container">
            <div className="designed_by">
              Design by <span className="designed_by_author">Wizard of Oz</span>
            </div>
          </section>
        </footer>
    );
  }
}

export default Footer
