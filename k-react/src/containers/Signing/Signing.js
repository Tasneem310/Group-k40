import React, { Component } from "react";
import { Link } from "react-router-dom";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import classes from "./Signing.css";
import Logo from'../../40days.png';

class Signing extends Component {
  state = {
    sgin: true
  };

  pageHandler = ( bool) => {
    this.setState({sgin: bool});
  }

  render() {
    let page = null ; 
    if(this.state.sgin){
        page = <SignIn />
    }else{
        page = <SignUp />
    }  
    return (
      <React.Fragment>
        <div className="menu">
        <img src={Logo} />
        <p onClick={()=>this.pageHandler(true)}>تسجيل دخول</p>
        <br />
        <p onClick={()=>this.pageHandler(false)}>تسجيل جديد</p>
        <br />
        </div>
        {page}
      </React.Fragment>
    );
  }
}

export default Signing;
