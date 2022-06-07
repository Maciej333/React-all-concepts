import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    counter: 10
}

export const addAfter2sec = createAsyncThunk<
    number,
    number,
    {
        rejectValue: number
    }
>(
    '[TOOLKIT SLICE] ADD AFTER 2 SEC',
    async (value: number, thunk) => {
        setTimeout(() => {
            thunk.dispatch(toolkitSliceAction.add(value));
        }, 2000)
        return 0;
        // return thunk.rejectWithValue(0);
    }
)


const slice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            return {
                counter: state.counter + action.payload
            }
        },
        minus: (state, action: PayloadAction<number>) => {
            return {
                counter: state.counter - action.payload
            }
        },
        reset: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addAfter2sec.pending, (state) => {
            return state;
        })
        builder.addCase(addAfter2sec.fulfilled, (state, action) => {
            return {
                counter: state.counter + action.payload
            }
        })
        builder.addCase(addAfter2sec.rejected, () => {
            return {
                counter: -1
            };
        })
    },
})

export const toolkitSliceAction = slice.actions;
export const toolkitSliceReducer = slice.reducer;