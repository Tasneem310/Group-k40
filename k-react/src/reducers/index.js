import { AUTHENTICAT , AUTHERIZE , ADD_COURSE } from "../actions/Types/Types";
import {  } from "../actions/Types/Types";

const initialState = {
  user: {},
  MyCourses: [],
  Courses: [
    { courN: "cours1", trainer: "Trainer1", time: "40days" },
    { courN: "cours2", trainer: "Trainer2", time: "40days" },
    { courN: "cours3", trainer: "Trainer3", time: "40days" }
  ],
  isAuthenticated: false,
  authorization: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICAT:
      return {
        ...state,
        isAuthenticated: true
      };
    case AUTHERIZE:
      return {
        ...state,
        authorization: true
      };
    case ADD_COURSE:
      console.log(state.MyCourses);
      return {
        ...state,
        MyCourses:  [...state.MyCourses , action.newCourse]
      };  
    default:
      return state;
  }
}
