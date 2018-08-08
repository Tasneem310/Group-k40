import React, { Component } from "react";

import classes from "./SignIn.css";

class SignIn extends Component {
  render() {
    return (
      <center>
        student name:<br />
        <input type="text" name="firstname" value="Mickey" />
        <br />
        password:<br />
        <input type="text" name="lastname" value="Mouse" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </center>
    );
  }
}

export default SignIn;
