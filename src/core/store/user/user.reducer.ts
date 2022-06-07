import { createReducer } from "@reduxjs/toolkit";
import { loginFailed, loginSuccess, logoutFailed, logoutSuccess } from "./user.actions";
import { userInitState } from "./user.state";

export const userReducer = createReducer(userInitState, (builder) =>
    builder
        .addCase(loginSuccess, (state, action) => {
            return {
                userData: action.payload,
                isLogin: true,
                error: null
            };
        })
        .addCase(loginFailed, (state) => {
            const newStateLoginFailed = JSON.parse(JSON.stringify(state));
            newStateLoginFailed.isLogin = false;
            newStateLoginFailed.error = "Login failed";
            return newStateLoginFailed;
        })
        .addCase(logoutSuccess, () => {
            return userInitState;
        })
        .addCase(logoutFailed, (state) => {
            const newStateLogoutFailed = JSON.parse(JSON.stringify(state));
            newStateLogoutFailed.error = "Logout failed";
            return newStateLogoutFailed;
        })
        .addDefaultCase((state) => {
            return state;
        })
)
