import { adCats } from "../../data/ads";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  choosedCat: null,
  choosedCatPId: null,
  categories: [],
  list: [],
};

export default function adsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "ads/ad-categories/":
      return {
        ...state,
        categories: payload.results,
      };
      case 'ads/ads/':
        return {
          ...state, 
          list: payload.results,
        }
    case HYDRATE:
      if (!payload) {
        return state;
      } else {
        console.log('PAYLOAD:', payload.adsReducer)
        switch (true){
          case (payload.adsReducer.categories.length > 0):
            let parentCats = payload.adsReducer.categories?.filter(item => item.related_ad_category == null);
        let structuredCats = parentCats && parentCats?.length > 0 && [...parentCats?.map((category => (
          {
            ...category,
            subCategories: payload.adsReducer.categories.filter(itm => itm.related_ad_category == category.id)
          }
        )))];
        return {
          ...payload.adsReducer,
          categories: structuredCats,
        };

        case (payload.adsReducer.list.length > 0):
          return state

        }
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
