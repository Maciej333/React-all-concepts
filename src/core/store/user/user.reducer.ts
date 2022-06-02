import { UserAction } from "../../models/UserAction";
import { UserState } from "../../models/UserState";
import { LOGIN_FAILED_TYPE, LOGIN_SUCCESS_TYPE, REGISTER_FAILED_TYPE, REGISTER_SUCCESS_TYPE } from "./user.actions"
import { userInitState } from "./user.state";

export const userReducer = (state: UserState = userInitState, action: UserAction) => {
    switch (action.type) {
        case LOGIN_SUCCESS_TYPE:
            return userInitState;
        case LOGIN_FAILED_TYPE:
            return userInitState;
        case REGISTER_SUCCESS_TYPE:
            return userInitState;
        case REGISTER_FAILED_TYPE:
            return userInitState;
        default:
            return state
    }
}