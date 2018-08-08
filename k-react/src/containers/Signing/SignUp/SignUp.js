import React, { Component } from "react";
import { Link } from "react-router-dom";

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
	  <div className="signupDiv">
        <label className="font ">Student Name: &nbsp;</label>
        <input
          type="text"
          onChange={this.nameHandler}
          value={this.state.sName}
        />
        <br />
        <label className="font "> Password:  &nbsp;</label>
        <input
          type="text"
          onChange={this.passHandler}
          value={this.state.pass}
        />
        <br />
         <label className="font ">Re-enter password:  &nbsp;</label>
        <input
          type="text"
          onChange={this.rePassHandler}
          value={this.state.rePass}
        />
        <br />
         <label className="font ">E-mail:  &nbsp;</label>
        <input
          type="text"
          onChange={this.eMailHandler}
          value={this.state.eMail}
        />
        <br />
        <br />
        <Link to="/Student"><input type="submit" value="Sign UP"  /></Link>
		</div>
      </center>
    );
  }
}

export default SignUp;
