import { Dispatch } from "redux";
import _dataManager from "../dataManager";
const blogActions = {
  getList:
    (data = {}) =>
    async (dispatch) =>
      await _dataManager.get("blog/posts/", data, { dispatch }),

  getInfo: (data) => async dispatch => await _dataManager.get(`blog/posts/${data.id}/`, data, {dispatch}),
  getCategories:
   (data = {}) => 
        async dispatch => 
        await _dataManager.get('blog/post-categories/', data, {dispatch}),

  
};

export default blogActions;
