import React, { Component } from "react";

import classes from "./SignUp.css"

class SignUp extends Component {
  state = {
    sName: "",
    pass: "",
    rePass: "",
    eMail: ""
  };
  nameHandler = event => {
    this.setState({ sName: event.value });
  };
  passHandler = event => {
    this.setState({ pass: event.value });
  };
  rePassHandler = event => {
    this.setState({ rePass: event.value });
  };
  eMailHandler = event => {
    this.setState({ eMail: event.value });
  };
  render() {
    return (
      <center>
        student name:<br />
        <input
          type="text"
          onChange={this.nameHandler}
          value={this.state.sName}
        />
        <br />
        password:<br />
        <input
          type="text"
          onChange={this.passHandler}
          value={this.state.pass}
        />
        <br />
        re-enter password:<br />
        <input
          type="text"
          onChange={this.rePassHandler}
          value={this.state.rePass}
        />
        <br />
        e-mail:<br />
        <input
          type="text"
          onChange={this.eMailHandler}
          value={this.state.eMail}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </center>
    );
  }
}

export default SignUp;
