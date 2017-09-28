import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component{


  render(){

    //potential inline styling?
    return(
      <div>

      <div className="App-header">
      <h3>
      <NavLink activeClassName="selected" className="App-Link" exact to="/">Home</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/register">Register</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/login">Login</NavLink>
      </h3>
      </div>

      {this.props.children}

      <footer className="App-footer">
      <span>copyright 2017</span>
      </footer>

      </div>


    )
  }
}
