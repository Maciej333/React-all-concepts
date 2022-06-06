import { useEffect, useReducer, useState } from 'react';
import BtnAdd from './BtnAdd/BtnAdd';
import './HookReducer.style.scss';

export default function HookReducer() {

    const ADD = "[useReducer] ADD";
    const REMOVE = "[useReducer] REMOVE";
    type Action = {
        type: string,
        payload: number
    };
    const initState = [
        1, 2, 3, 4
    ];

    const [stateNumber, setStateNumber] = useState(99);

    useEffect(() => {
        if (stateNumber > 99)
            dispatch({ type: ADD, payload: stateNumber });
    }, [stateNumber]);

    const reducer = (state: typeof initState, action: Action) => {
        switch (action.type) {
            case ADD:
                return [...state, action.payload];
            case REMOVE:
                return state.filter((el, id) => {
                    if (id === action.payload) {
                        return false;
                    }
                    return true;
                })
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initState);

    const handleAdd = () => {
        setStateNumber(prev => {
            return prev + 1;
        })
    }

    const handleRemove = (id: number) => {
        dispatch({ type: REMOVE, payload: id });
    }

    return (
        <div className='hook-reducer'>
            <div>
                {state.map((el, id) => {
                    return <span
                        key={`[Reducer tab] = ${id}`}
                    >
                        {el}
                        <button onClick={() => handleRemove(id)}>X</button>
                    </span>
                })}
            </div>
            <BtnAdd click={handleAdd} />
        </div>
    )
}
