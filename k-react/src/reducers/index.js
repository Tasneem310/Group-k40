import { AUTHENTICAT } from "../actions/Types/Types";
import { AUTHERIZE } from "../actions/Types/Types";

const initialState = {
  isAuthenticated: false,
  authorization: null
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
    default:
      return state;
  }
}