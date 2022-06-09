import { ChangeEvent, useEffect, useState } from 'react';
import useCustom from '../../../core/hooks/useCustom';
import './HookCustom.style.scss';

export default function HookCustom() {

    const [state, setState] = useState("Hook usage")
    const { data } = useCustom(state);

    useEffect(() => {

    }, [state]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(value);
    }

    return (
        <div className='hook-custom'>
            <label htmlFor='state'>Data to return after 5s</label>
            <input id="state" name="state" value={state} onChange={handleChange}></input>

            <span>Data from hook:</span>
            <span>{data}</span>
        </div>
    )
}
