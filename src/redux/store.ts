import { createStore } from 'redux';
import { livingRoomData, bedRoomData, kidsRoomData, outsideData } from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import { combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
    livingRoomData,
    bedRoomData,
    kidsRoomData,
    outsideData
});

const store = createStore(rootReducer, devToolsEnhancer({}));

export type AppState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;