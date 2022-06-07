import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '../../../core/hooks/store.hooks';
import { addAfter2sec, toolkitSliceAction } from '../store/slice/toolkit.slice';
import './ToolkitSliceRedux.style.scss';

export default function ToolkitSliceRedux() {

    const [state, setState] = useState(1);

    const counter = useAppSelector(state => state.toolkitSliceCounter);
    const dispatch = useAppDispatch();
    const dispatchAsync = useAppThunkDispatch();


    const handleAdd = () => {
        dispatch(toolkitSliceAction.add(state));
    }

    const handleMinus = () => {
        dispatch(toolkitSliceAction.minus(state));
    }

    const handleReset = () => {
        dispatch(toolkitSliceAction.reset());
    }

    const handleAddAync = () => {
        dispatchAsync(addAfter2sec(state));
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(Number(value));
    }

    return (
        <div className='toolkit-slice-redux'>
            <div className='store'>
                <span>Counter = </span>
                <span>{counter.counter}</span>
            </div>

            <div>
                <label htmlFor='val'>Value to add/subtract</label>
                <input id="val" name="val" type="number" value={state} onChange={handleChange}></input>
            </div>

            <div>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleMinus}>Subtract</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleAddAync}>Add after 2s</button>
            </div>
        </div>
    )
}
