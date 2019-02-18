import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
        <div className="login_subpage">
          <div className="login_window">
                <div className='login_window__header'>Are you a Mountain Knight?</div>
                <input onChange={ this.props.login } type="email" placeholder="Email"/>
                <input onChange={ this.props.password } type="password" placeholder="Password"/>
                <button onClick={ this.props.submit } className="login_btn btn_post">Log in</button>
          </div>
        </div>
    );
  }
}

export default Login;
