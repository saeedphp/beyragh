import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';


import * as reducers from './reducers';
import * as slices from './slice';
import { publicSlice } from './slice';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
const initialState = {};
const middleware = [thunk];
// const store = createStore(
//   combineReducers(reducers),
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// // export default store;


// // export an assembled wrapper
// export const wrapper = createWrapper(store, {debug: true});


const makeStore = () => configureStore({
  reducer:{
    publicSlice,
    ...reducers,
  },
  devTools: true
});



export const wrapper = createWrapper(makeStore);