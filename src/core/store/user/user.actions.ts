import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../models/User";

const localStorageName = "USER STATE";

export const LOGIN_SUCCESS_TYPE = "[USER] login success";
export const LOGIN_FAILED_TYPE = "[USER] login failed";
export const LOGOUT_SUCCESS_TYPE = "[USER] logout success";
export const LOGOUT_FAILED_TYPE = "[USER] logout failed";

export const loginSuccess = createAction<User>(LOGIN_SUCCESS_TYPE);
export const loginFailed = createAction<undefined>(LOGIN_FAILED_TYPE);
export const logoutSuccess = createAction<undefined>(LOGOUT_SUCCESS_TYPE);
export const logoutFailed = createAction<undefined>(LOGOUT_FAILED_TYPE);

export const login = createAsyncThunk(
    'login',
    async (data: { data: User, isSuccess: boolean }, thunk) => {
        setTimeout(() => {
            if (data.isSuccess) {
                localStorage.setItem(localStorageName, JSON.stringify(data.data));
                thunk.dispatch(loginSuccess(data.data));
            } else {
                thunk.dispatch(loginFailed());
            }
        }, 2000);
    }
)

export const logout = createAsyncThunk(
    'logout',
    async (isSuccess: boolean, thunk) => {
        setTimeout(() => {
            if (isSuccess) {
                localStorage.removeItem(localStorageName);
                thunk.dispatch(logoutSuccess());
            } else {
                thunk.dispatch(logoutFailed());
            }
        }, 2000);
    }
)


export const refresh = createAsyncThunk(
    'refresh',
    async (none: string = "", thunk) => {
        const storage = localStorage.getItem(localStorageName);
        if (storage) {
            const data = JSON.parse(storage);
            thunk.dispatch(loginSuccess(data));
        }
    }
)
