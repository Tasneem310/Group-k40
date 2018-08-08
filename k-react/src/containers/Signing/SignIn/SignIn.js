import React, { Component } from "react";

import classes from "./SignIn.css";

class SignIn extends Component {
  render() {
    return (
      <center className="login_center">
	  
	  <div className="signinDiv">
        <label >Student Name:&nbsp; </label>
        <input   align="right" type="text" name="firstname" value="Mickey" />
        <br />
        <label >Password:&nbsp;</label>
		
        <input  align="right" type="password" name="lastname" value="Mouse"  />
		
        <br />
        <input type="submit" value="Sign In"  />
		</div >
      </center>
    );
  }
}

export default SignIn;
