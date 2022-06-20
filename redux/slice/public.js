import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';


export const publicSlice = createSlice({
  name: 'product',

  initialState: {
    name: null
  },

  reducers: {
    setProductData: (state, action) => {
      state.name = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', action.payload);

      if (!action.payload) {
        return state;
      }

      state.name = action.payload.publicSlice.name;
    // state.name = 'hydrate'
    }
  }
});

export const { setProductData } = publicSlice.actions;

export const selectProduct = (state) => state.product;

export const fetchProduct =
    (data) =>
      async dispatch => {
        const timeoutPromise = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

        await timeoutPromise(1000);

        dispatch(
          setProductData(data)
        );
      };


export default publicSlice.reducer;