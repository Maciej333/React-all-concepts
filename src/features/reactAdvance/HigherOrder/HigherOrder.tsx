import { ChangeEvent, useState } from 'react';
import './HigherOrder.style.scss';
import WrapMe from './WrapMe/WrapMe';

export default function HigherOrder() {
    const [state, setState] = useState("220.2345");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(value);
    }

    return (
        <div className='higher-order'>
            <label htmlFor='money'>State money = </label>
            <input id="money" name="money" value={state} onChange={handleChange}></input>
            <div>
                <WrapMe money={state} />
            </div>
        </div>
    )
}
