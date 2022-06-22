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
    case "ads/ad-categories/":
      return {
        ...state,
        categories: payload,
      };
    case HYDRATE:
      if (!payload) {
        return state;
      } else {
        let parentCats = payload.adsReducer.categories.filter(item => item.related_ad_category == null);
        let structuredCats = [...parentCats.map((category => (
          {
            ...category,
            subCategories: payload.adsReducer.categories.filter(itm => itm.related_ad_category == category.id)
          }
        )))];
        return {
          ...state,
          categories: structuredCats,
        };
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
