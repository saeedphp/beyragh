import { adCats } from "../../data/ads";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  list: [],
  info: {},
};

export default function blogReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "blog/posts/":
      if(payload.results){
        return {
            ...state,
            list: payload.results
          };
      }
      case `blog/posts/${payload?.id}/`:
          return {
              ...state,
              info: payload
          }
      
        
    case HYDRATE:
      if (!payload) {
        return state;
      } else {
        //   console.log(type)
        console.log('payload:', payload.blogReducer)
        return {
          ...state,
          list: payload.blogReducer.list,
          info: payload.blogReducer.info
        };
      }

   

    default:
      return state;
  }
}
