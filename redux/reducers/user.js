
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    loginModal: true,
};

export default function userReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "CONTROL_MODAL":
      return {
        ...state,
        loginModal: payload,
      };
    

    

    default:
      return state;
  }
}
