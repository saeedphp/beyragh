import { Dispatch } from "redux";
import _dataManager from "../dataManager";
const adsActions = {
  list:
    (data = {}) =>
    async (dispatch) =>
      await _dataManager.get("ads/ad-categories", data, { dispatch }),

  chooseCategory: (catId, PId) => async (dispatch) => {
    await dispatch({
      type: "CHOOSE_CATEGORY",
      payload: {
        choosedCat: catId,
        choosedCatPId: PId,
      },
    });
  },
};

export default adsActions;
