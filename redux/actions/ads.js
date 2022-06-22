import { Dispatch } from "redux";
import _dataManager from "../dataManager";
const adsActions = {
  list:
    (data = {}) =>
    async (dispatch) =>
      await _dataManager.get("ads/ad-categories/", data, { dispatch }),

  chooseCategory: (catId, PId) => async (dispatch) => {
    await dispatch({
      type: "CHOOSE_CATEGORY",
      payload: {
        choosedCat: catId,
        choosedCatPId: PId,
      },
    });
  },
  checkUserStatus: () => async dispatch => {
    let access = localStorage.getItem('access');
    if(access) {
      dispatch({type: 'SET_USER_STATUS', payload: true});
    }else {
      dispatch({type: 'SET_USER_STATUS', payload: false});
    }
  },
};

export default adsActions;
