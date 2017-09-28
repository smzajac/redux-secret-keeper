import React, { Component } from 'react';


export default class Login extends Component{

  state = {
    password: "",
    email: ""
  }

  passHandler = (e) => {
    e.preventDefault();
    this.setState({name: e.target.value})
  }

  emailHandler = (e) => {
    e.preventDefault();
    this.setState({email: e.target.value})
  }

  render(){
    return(
      <div className="App">
      <h1> Super Cool Login Thing </h1>
      <form>
      <input onChange={this.emailHandler} value={this.state.email} placeholder="Email"/>
      <br/>
      <input onChange={this.passHandler} value={this.state.password} placeholder="Password"/>
      <br/>
      <button>Submit</button>
      </form>
      </div>
    );
  }
}
