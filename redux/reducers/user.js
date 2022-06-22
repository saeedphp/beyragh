
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    loginModal: true,
    isLogin: false,
};

export default function userReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "CONTROL_MODAL":
      return {
        ...state,
        loginModal: payload,
      };
    case 'SET_USER_STATUS': 
    return{
        ...state,
        isLogin: payload,
    }

    

    default:
      return state;
  }
}
