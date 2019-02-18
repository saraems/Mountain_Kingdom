import React, { Component } from 'react';
import './Home.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../LogIn/Login";
import queryString from 'query-string';



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }


    login = (e) => {
      this.setState({
          login: e.target.value
      })
    };

    password = (e) => {
      this.setState({
          password: e.target.value
      })
    };

    submit = (e) => {
        e.preventDefault();

        let login = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: queryString.stringify({
                "login": "correct_login@example.com",
                "password": "C0rr3Ct_P@55w0rd"
            })
        };

        fetch('https://recruitment-api.pyt1.stg.jmr.pl/login',login)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        document.body.querySelector('.login_subpage').style.display = "none"

    };


    enterTheGates = () => {
        document.body.querySelector('.login_subpage').style.display = "flex"
    };

  render() {
    return (
      <React.Fragment>
          <Header/>
          <Main enter={ this.enterTheGates }/>
          <Footer/>
          <Login login={ this.login } password={ this.password } submit={ this.submit }/>
      </React.Fragment>
    );
  }
}

export default Home;
