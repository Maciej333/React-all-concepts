import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import thunk from 'redux-thunk'
import { basicReducer } from '../../features/reactRedux/store/basic/basic.reducer';
import { toolkitReducer } from '../../features/reactRedux/store/toolkit/toolkit.reducer';

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        basicCounter: basicReducer,
        toolkitCounter: toolkitReducer
    }),
    middleware: [
        thunk
    ]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;