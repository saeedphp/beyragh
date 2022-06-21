import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { adCats } from "../../../data/ads";
import { serverUrl } from "../../constants";

export const ProclamationSlice = createSlice({
  name: "Proclamation",

  initialState: {
   
        categoryId: null,
        parentId: null,
        categories: adCats,
   
  },

  reducers: {
    setProductData: (state, action) => {
      state.name = action.payload;
    },
    setCategory: (state, {type, payload}) => {
      state.categoryId = payload.id;
      state.parentId = payload.parentId;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);

      if (!action.payload) {
        return state;
      }
      state.proclamation = action.payload.ProclamationSlice.proclamation
      
    },
  },
});

export const { setProductData, setCategory } = ProclamationSlice.actions;

export const selectProduct = (state) => state.product;

export const changeCategory = (data) => async dispatch => {
    await dispatch(setCategory(data));
}
export default ProclamationSlice.reducer;
