import { useCallback, useEffect, useState } from 'react';
import { FunElement } from './FunElement/FunElement';
import './HookCallback.style.scss';
import { MemoElement } from './MemoElement/MemoElement';

export default function HookCallback() {

    const [refresh, setRefresh] = useState(true);
    const [val, setVal] = useState(5);
    const [pow, setPow] = useState(2);

    useEffect(() => {
        console.log("\n\n==== refresh CALLBACK");
    }, [refresh])

    const fun = (): number => {
        return val ** pow;
    }

    const memoizedFun = useCallback(
        fun,
        [val, pow]
    );

    return (
        <div className='hook-callback'>
            <p>Open browser console</p>
            <label htmlFor='val'>val = </label>
            <input id="val" name="val" type="number" value={val} onChange={(e) => setVal(Number(e.target.value))} />
            <label htmlFor='pow'>pow = </label>
            <input id="pow" name="pow" type="number" value={pow} onChange={(e) => setPow(Number(e.target.value))} />

            <span>FUN = </span>
            <FunElement function={fun} />

            <span>MEMO = </span>
            <MemoElement function={memoizedFun} />

            <div>
                <button onClick={() => setRefresh(prev => !prev)}>Refresh component</button>
            </div>
        </div>
    )
}
