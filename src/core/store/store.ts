import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer
    }),
    middleware: [
        thunk
    ]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;