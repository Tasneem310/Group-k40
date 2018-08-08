import React , { Component } from "react";

import Courses from "./Courses/Courses";
import MyCourses from "./MyCourses/MyCourses";

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
        <p onClick={() => this.pageHandler(true)}>برامجي</p>
        <br />
        <p onClick={() => this.pageHandler(false)}>البرامج التدريبية
        </p>
        <br />
        {page}
      </React.Fragment>
    );
  }
}

export default Student;
