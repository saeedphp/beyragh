import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { serverUrl } from "../constants";

export const FaqsSlice = createSlice({
  name: "faqs",

  initialState: {
    faqs: [],
  },

  reducers: {
    setProductData: (state, action) => {
      state.name = action.payload;
    },
    setFaqs: (state, { type, payload }) => {
      state.faqs = payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);

      if (!action.payload) {
        return state;
      }
      state.faqs = action.payload.FaqsSlice.faqs
    
    },
  },
});

export const { setProductData, setFaqs } = FaqsSlice.actions;

export const selectProduct = (state) => state.product;

export const fetchFaqs = () => async (dispatch) => {
  try {
    let res = await axios.get(serverUrl + "cms/faq/list");
    // console.log(res);
    dispatch(setFaqs(res.data.result));
  } catch (error) {
    console.error(error);
  }
};

export default FaqsSlice.reducer;
