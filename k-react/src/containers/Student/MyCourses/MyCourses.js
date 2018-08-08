import React from 'react';

import { connect } from "react-redux";

const MyCourses = (props) => {
    return(
    <React.Fragment>
        {props.myCour.map(Course => (
        <div>
          {Course.courN +
            "       " +
            Course.trainer +
            "         " +
            Course.time}
          <br />
        </div>
      ))}
    </React.Fragment>
);
}

const mapStateToProps = state => ({
    myCour: state.MyCourses
});
export default connect(mapStateToProps)(MyCourses);