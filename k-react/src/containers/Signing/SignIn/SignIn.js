import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./SignIn.css";

class SignIn extends Component {
  state = {
    sName: "",
    pass: ""
  };
  nameHandler = event => {
    this.setState({ sName: event.value });
  };
  passHandler = event => {
    this.setState({ pass: event.value });
  };
  render() {
    return (
      <center className="login_center">
	  
	  <div className="signinDiv">
        <label >Student Name:&nbsp; </label>
        <input   align="right" type="text" onChange={this.nameHandler} name="firstname" value={this.state.sName} />
        <br />
        <label >Password:&nbsp;</label>
		
        <input  align="right" type="password" onChange={this.passHandler} name="lastname" value={this.state.pass}  />
		
        <br />
        <Link to="/Student"><input type="submit" value="Sign In"  /></Link>
		</div >
      </center>
    );
  }
}

export default SignIn;
