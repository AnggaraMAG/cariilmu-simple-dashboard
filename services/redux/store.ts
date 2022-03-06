import { configureStore, ThunkAction, Action, getDefaultMiddleware ,combineReducers} from "@reduxjs/toolkit";
import logger from 'redux-logger'
import { instructor } from "./features/instruktur";
import {kelas} from './features/kelas'


const rootReducers = {
    [instructor.reducerPath]:instructor.reducer,
    [kelas.reducerPath]:kelas.reducer,
}


export const store = configureStore({
  reducer:rootReducers,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
