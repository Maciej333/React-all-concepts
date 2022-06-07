import { PayloadAction } from "@reduxjs/toolkit";
import { ADD, MINUS, RESET } from "./basic.actions";
import { IBasicReducer, initBasicState } from "./basic.state";

export const basicReducer = (state: IBasicReducer = initBasicState, action: PayloadAction<number, string>) => {
    switch (action.type) {
        case ADD:
            const newStateAdd = state.counter + action.payload;
            return {
                counter: newStateAdd
            };
        case MINUS:
            const newStateMinus = state.counter - action.payload;
            return {
                counter: newStateMinus
            };;
        case RESET:
            return initBasicState
        default:
            return state
    }
}