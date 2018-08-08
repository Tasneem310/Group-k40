import { AUTHENTICAT , AUTHERIZE , ADD_COURSE } from "../actions/Types/Types";
import {  } from "../actions/Types/Types";

const initialState = {
  user: {},
  MyCourses: [],
  Courses: [
    { courN: "الدورة الأولى", trainer: "المدرب الأول", time: "أربعون يوما" },
    { courN: "الدورة الثانية", trainer: "المدرب الثاني", time: "أربعون يوما" },
    { courN: "الدورة الثالثة", trainer: "المدرب الثالث", time: "أربعون يوما" }
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
