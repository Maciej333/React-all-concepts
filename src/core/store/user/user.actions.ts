// import { AnyAction } from "redux";
// import { ThunkAction } from "redux-thunk";
// import { User } from "../../models/User";
// import { RootState } from "../store";

// export const LOGIN_SUCCESS_TYPE = "[USER] login success";
// export const LOGIN_FAILED_TYPE = "[USER] login failed";
// export const LOGOUT_SUCCESS_TYPE = "[USER] logout success";
// export const LOGOUT_FAILED_TYPE = "[USER] logout failed";

// const localStorageName = "USER STATE";

// export const loginSuccess = (user: User) => {
//     return {
//         type: LOGIN_SUCCESS_TYPE,
//         payload: {
//             userData: user,
//             isLogin: true
//         }
//     }
// }

// export const loginFailed = () => {
//     return {
//         type: LOGIN_FAILED_TYPE
//     }
// }

// export const logoutSuccess = () => {
//     return {
//         type: LOGOUT_SUCCESS_TYPE
//     }
// }

// export const logoutFailed = () => {
//     return {
//         type: LOGOUT_FAILED_TYPE
//     }
// }

// export const login =
//     (data: User, isSuccess: boolean): ThunkAction<void, RootState, unknown, AnyAction> =>
//         async dispatch => {
//             setTimeout(() => {
//                 if (isSuccess) {
//                     localStorage.setItem(localStorageName, JSON.stringify(data));
//                     dispatch(loginSuccess(data));
//                 } else {
//                     dispatch(loginFailed());
//                 }
//             }, 2000);
//         }

// export const logout =
//     (isSuccess: boolean): ThunkAction<void, RootState, unknown, AnyAction> =>
//         dispatch => {
//             setTimeout(() => {
//                 if (isSuccess) {
//                     localStorage.removeItem(localStorageName);
//                     dispatch(logoutSuccess());
//                 } else {
//                     dispatch(logoutFailed());
//                 }
//             }, 2000);
//         }

// export const refresh = (): ThunkAction<void, RootState, unknown, AnyAction> =>
//     async dispatch => {
//         const storage = localStorage.getItem(localStorageName);
//         if (storage) {
//             const data = JSON.parse(storage);
//             dispatch(loginSuccess(data));
//         }
//     }

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
