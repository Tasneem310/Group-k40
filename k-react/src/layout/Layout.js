import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Signing from "../containers/Signing/Signing";

class Layout extends Component {
  render() {
    return (
        <Signing />
    );
  }
}



export default Layout;
