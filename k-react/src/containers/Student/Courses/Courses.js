import React from "react";
import { connect } from "react-redux";

import { ADD_COURSE } from "../../../actions/Types/Types";

const Courses = props => {
  return (
    <React.Fragment>
      {props.Cour.map(Course => (
        <div>
          {Course.courN +
            "       " +
            Course.trainer +
            "         " +
            Course.time}
          <input
            type="submit"
            onClick={() => props.onAddCourse(Course)}
            value="Add"
          />
          <br />
        </div>
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  Cour: state.Courses ,
  myCour: state.MyCourses
});

const mapDispatchToProps = dispatch => ({
  onAddCourse: (Course) => dispatch({ type: ADD_COURSE, newCourse: Course })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
