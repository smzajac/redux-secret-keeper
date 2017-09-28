import React, { Component } from 'react';


export default class Register extends Component{

  state = {
    name: "",
    email: "",
    password: "",
    secret: ""
  }

  nameHandler = (e) => {
    e.preventDefault();
    this.setState({name: e.target.value})
  }

  emailHandler = (e) => {
    e.preventDefault();
    this.setState({email: e.target.value})
  }

  passwordHandler = (e) => {
    e.preventDefault();
    this.setState({password: e.target.value})
  }

  secretHandler = (e) => {
    e.preventDefault();
    this.setState({secret: e.target.value})
  }

  render(){
    return(
      <div className="App">
      <h1> Super Cool Register Thing </h1>
      <form>
      <input onChange={this.nameHandler} value={this.state.name} placeholder="Name"/>
      <br/>
      <input onChange={this.emailHandler} value={this.state.email} placeholder="Email"/>
      <br/>
      <input onChange={this.passwordHandler} value={this.state.password} placeholder="Password"/>
      <br/>
      <textarea onChange={this.secretHandler} value={this.state.secret} placeholder="Secrets Go Here... We won't tell anyone. Promise..." rows="10" cols="50"> </textarea>
      </form>
      </div>
    );
  }
}
