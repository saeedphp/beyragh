import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';

import * as slices from './slice';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
const initialState = {};
const middleware = [thunk];

const makeStore = () => configureStore({
  reducer: combineReducers(slices),
  devTools: true
});



export const wrapper = createWrapper(makeStore);