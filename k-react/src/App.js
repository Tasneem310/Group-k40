import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Signing from "./containers/Signing/Signing";
import Admin from "./containers/Admin/Admin";
import Trainer from "./containers/Trainer/Trainer";
import Student from "./containers/Student/Student";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Signing} />
        <Route path="/Admin" component={Admin} />
        <Route path="/Trainer" component={Trainer} />
        <Route path="/Student" component={Student} />
      </div>
    );
  }
}

export default App;
