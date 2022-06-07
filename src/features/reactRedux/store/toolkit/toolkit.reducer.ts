import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { add, ADD, addAfter2sec, minus, MINUS, reset, RESET } from "./toolkit.actions";
import { initToolkitState } from "./toolkit.state";


export const toolkitReducer = createReducer(initToolkitState, (builder) =>
    builder
        .addCase(add, (state, action) => {
            return {
                counter: state.counter + action.payload
            }
        })
        .addCase(minus, (state, action) => {
            return {
                counter: state.counter - action.payload
            }
        })
        .addCase(reset, () => {
            return initToolkitState;
        })
        .addCase(addAfter2sec.pending, (state) => {
            return state;
        })
        .addCase(addAfter2sec.fulfilled, (state, action) => {
            return {
                counter: state.counter + action.payload
            }
        })
        .addCase(addAfter2sec.rejected, () => {
            return {
                counter: -1
            };
        })
        .addDefaultCase((state) => {
            return state;
        })
)

//=================== 2 WAY of creating reducer

// export const toolkitReducer = createReducer(initToolkitState, {
//     [ADD]: (state, action: PayloadAction<number>) => {
//         return {
//             counter: state.counter + action.payload
//         }
//     },
//     [MINUS]: (state, action: PayloadAction<number>) => {
//         return {
//             counter: state.counter - action.payload
//         }
//     },
//     [RESET]: () => {
//         return initToolkitState
//     },
//     default: (state) => {
//         return state;
//     }
// })