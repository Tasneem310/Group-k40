import React from "react";

import { connect } from "react-redux";

import classes from "./MyCourses.css";

const MyCourses = props => {
  return (
    <React.Fragment>
      <div className="content">
        {props.myCour.map(Course => (
          <div className="theShow">
            <h3>{Course.courN}</h3>
            <p>{"المدرب" + Course.trainer}</p> <br />
            <p>{"الفترى الزمنية" + Course.time}</p>
            <br />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  myCour: state.MyCourses
});
export default connect(mapStateToProps)(MyCourses);
