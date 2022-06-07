import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const ADD = "[TOOLKIT] ADD";
export const MINUS = "[TOOLKIT] MINUS";
export const RESET = "[TOOLKIT] reset";
export const ADDAFTER2SEC = "[TOOLKIT] ADD AFTER 2 SEC";

export const add = createAction<number>(ADD);
export const minus = createAction<number>(MINUS);
export const reset = createAction(RESET);
export const addAfter2sec = createAsyncThunk<
    number,
    number,
    {
        rejectValue: number
    }
>(
    ADDAFTER2SEC,
    async (value: number, thunk) => {
        setTimeout(() => {
            thunk.dispatch(add(value));
        }, 2000)
        return 0;
        // return thunk.rejectWithValue(0);
    }
)

