import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
        <main>
          <section>
            <h2>Mountain Kingdom</h2>
          </section>
          <section className="login_container">
            <button onClick={ this.props.enter } className="login_btn" id="logn_btn">Enter the gates</button>
          </section>
        </main>
    );
  }
}

export default Main;
