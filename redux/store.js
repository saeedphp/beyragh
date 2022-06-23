// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as reducers from './reducers';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
const initialState = {};
const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, combineReducers(reducers));

const makeStore = () => configureStore({
  reducer: persistedReducer,
  devTools: true
});



export const wrapper = createWrapper(makeStore);
