import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  faqs: []
};


export default function publicApi(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server,
        },
      };
    case 'GET_FAQS':
      return{
        ...state,
        faqs: data
      }
    default:
      return state;
  }
}
