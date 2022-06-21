import { adCats } from "../../data/ads";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  choosedCat: null,
  choosedCatPId: null,
  categories: adCats,
};

export default function adsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "ads/ad-categories":
      return {
        ...state,
        categories: payload,
      };
    case HYDRATE:
      if (!payload) {
        return state;
      } else {
        // return {
        //   ...state,
        //   categories: payload.adsReducer.categories,
        // };
        return state
      }

    case "CHOOSE_CATEGORY":
      return {
        ...state,
        choosedCat: payload.choosedCat,
        choosedCatPId: payload.choosedCatPId,
      };

    default:
      return state;
  }
}
