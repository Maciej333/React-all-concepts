import { ChangeEvent, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '../../../core/hooks/store.hooks';
// import { AppDispatch, RootState } from '../../../core/store/store';
import { add, addAfter2sec, minus, reset } from '../store/toolkit/toolkit.actions';
// import { IToolkitReducer } from '../store/toolkit/toolkit.state';
import './ToolkitRedux.style.scss';

export default function ToolkitRedux() {

    const [state, setState] = useState(1);

    // const counter = useSelector<RootState>(state => state.toolkitCounter) as IToolkitReducer;
    // const dispatch = useDispatch<AppDispatch>();
    // const dispatchAsync = useDispatch<ThunkDispatch<RootState, void, Action>>();
    const counter = useAppSelector(state => state.toolkitCounter);
    const dispatch = useAppDispatch();
    const dispatchAsync = useAppThunkDispatch();


    const handleAdd = () => {
        dispatch(add(state));
    }

    const handleMinus = () => {
        dispatch(minus(state));
    }

    const handleReset = () => {
        dispatch(reset());
    }

    const handleAddAync = () => {
        dispatchAsync(addAfter2sec(state));
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(Number(value));
    }

    return (
        <div className='toolkit-redux'>
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
