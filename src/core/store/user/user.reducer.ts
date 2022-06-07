// import { UserAction } from "../../models/UserAction";
// import { UserState } from "../../models/UserState";
// import { LOGIN_FAILED_TYPE, LOGIN_SUCCESS_TYPE, LOGOUT_FAILED_TYPE, LOGOUT_SUCCESS_TYPE, } from "./user.actions"
// import { userInitState } from "./user.state";

// export const userReducer = (state: UserState = userInitState, action: UserAction) => {
//     switch (action.type) {
//         case LOGIN_SUCCESS_TYPE:
//             return action.payload;
//         case LOGIN_FAILED_TYPE:
//             const newStateLoginFailed = JSON.parse(JSON.stringify(state));
//             newStateLoginFailed.isLogin = false;
//             newStateLoginFailed.error = "Login failed";
//             return newStateLoginFailed;
//         case LOGOUT_SUCCESS_TYPE:
//             return userInitState;
//         case LOGOUT_FAILED_TYPE:
//             const newStateLogoutFailed = JSON.parse(JSON.stringify(state));
//             newStateLogoutFailed.error = "Logout failed";
//             return newStateLogoutFailed;
//         default:
//             return state
//     }
// }

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
