import { adCats } from "../../data/ads";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  list: [],
  info: {},
  categories: [],
};

export default function blogReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "blog/posts/":
      if (payload.results) {
        return {
          ...state,
          list: payload.results,
        };
      }
    case `blog/posts/${payload?.id}/`:
      return {
        ...state,
        info: payload,
      };
    case "blog/post-categories/":
      if (payload.results) {
        return {
          ...state,
          categories: payload.results,
        };
      }

    case HYDRATE:
      if (!payload) {
        return state;
      } else {
        console.log("payload:", payload.blogReducer);
        switch (true) {
          case payload.blogReducer.categories.length > 0:
            return {
              ...payload.blogReducer,
              categories: payload.blogReducer.categories,
            };
          case payload.blogReducer.list.length > 0:
            return {
              ...payload.blogReducer,
              list: payload.blogReducer.list,
            };
          default:
            return {
              ...state,
              info: payload.blogReducer.info,
            };
        }
      }

    default:
      return state;
  }
}
