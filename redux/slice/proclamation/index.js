import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { serverUrl } from "../../constants";

export const ProclamationSlice = createSlice({
  name: "Proclamation",

  initialState: {
    proclamation: {
        categoryId: null,

    },
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
      state.proclamation = action.payload.ProclamationSlice.proclamation
    
    },
  },
});

export const { setProductData, setFaqs } = ProclamationSlice.actions;

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

export default ProclamationSlice.reducer;
