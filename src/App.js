import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Link to="/">
          <p>Route 1</p>
        </Link>

        <Link to="/Route2">
          <p>Route 2</p>
        </Link>

        <Link to="/Route3">
          <p>Route 3</p>
        </Link>
        {routes}
      </div>
    );
  }
}

export default App;