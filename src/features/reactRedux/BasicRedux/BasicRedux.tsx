import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../../core/store/store';
import { add, addAfter2sec, minus, reset } from '../store/basic/basic.actions';
import { IBasicReducer } from '../store/basic/basic.state';
import './BasicRedux.style.scss';

export default function BasicRedux() {

    const [state, setState] = useState(1);

    const dispatch = useDispatch();
    const dispatchAsync = useDispatch<ThunkDispatch<RootState, void, Action>>();

    const counter = useSelector<RootState>(state => state.counter) as IBasicReducer;

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
        <div className='basic-redux'>
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
