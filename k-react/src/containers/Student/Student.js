import React , { Component } from "react";

import Courses from "./Courses/Courses";
import MyCourses from "./MyCourses/MyCourses";

import classes  from "./Student.css";
import Logo from'../../40days.png';

class Student extends Component {
  state = {
    sgin: true
  };

  pageHandler = bool => {
    this.setState({ sgin: bool });
  };

  render() {
    let page = null;
    if (this.state.sgin) {
      page = <MyCourses />;
    } else {
      page = <Courses />;
    }
    return (
      <React.Fragment>
      <div className = "menu">
      <img src={Logo} />
        <p onClick={() => this.pageHandler(true)}>برامجي</p>
        <br />
        <p onClick={() => this.pageHandler(false)}>البرامج التدريبية
        </p>
        <br />
        
      </div>
      {page}
      </React.Fragment>
    );
  }
}

export default Student;
