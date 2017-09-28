import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {connect} from 'react-redux';


// import {loadTokenFromCookie} from "./actions";

class App extends Component {

  state = {
    searchQuery: ""
  }

  searchHandler = (e) => {
    e.preventDefault();
    this.setState({searchQuery:e.target.value})
  } 

  // searchPhotos = (e) => {
  //   e.preventDefault();
  //   this.props.dispatch(fetchPhotos(this.state.searchQuery))
  //   this.setState({searchQuery:''})
  // }


  render() {
    return (

      <div className="App">
        <h1> Super Cool Home Thing </h1>
        <form>
         <input onChange={this.searchHandler} value={this.state.searchQuery} placeholder='Search...' />
         <button type='submit'>Search Photos </button>
         </form>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
