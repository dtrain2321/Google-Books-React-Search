import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Google Books Search</h2>
        </div>
        <p className="App-intro">
          <code>Work in progress on src/App.js</code>
        </p>
      </div>
    );
  }
}

export default App;