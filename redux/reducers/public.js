
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    isMobile: false,
};

export default function publicApi(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'SET_MOBILE': 
        return{
            ...state,
            isMobile: payload
        }

    

    default:
      return state;
  }
}
