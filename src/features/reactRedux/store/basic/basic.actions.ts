import { PayloadAction } from "@reduxjs/toolkit";
import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../../../core/store/store";

export const ADD = "[BASIC] ADD";
export const MINUS = "[BASIC] MINUS";
export const RESET = "[BASIC] reset";


export const add = (value: number): PayloadAction<number, string> => {
    return {
        type: ADD,
        payload: value
    }
}

export const minus = (value: number): PayloadAction<number, string> => {
    return {
        type: MINUS,
        payload: value
    }
}

export const reset = (): Action => {
    return {
        type: RESET
    }
}

export const addAfter2sec = (value: number): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        setTimeout(() => {
            dispatch(add(value));
        }, 2000)
    }