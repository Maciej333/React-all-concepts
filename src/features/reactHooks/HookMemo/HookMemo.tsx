import { useEffect, useMemo, useState } from 'react';
import { FunElement } from '../HookCallback/FunElement/FunElement';
import '../HookCallback/HookCallback.style.scss'
import { MemoElement } from '../HookCallback/MemoElement/MemoElement';

export default function HookMemo() {

    const [refresh, setRefresh] = useState(true);
    const [stateVal, setStateVal] = useState(5);
    const [statePow, setStatePow] = useState(2);

    useEffect(() => {
        console.log("\n\n==== refresh MEMO");
    }, [refresh])

    const fun = (val: number, pow: number) => (): number => {
        return val ** pow;
    }

    const memoizedFun = useMemo(
        () => fun(stateVal, statePow),
        [stateVal, statePow]
    );

    return (
        <div className='hook-callback'>
            <p>Open browser console</p>
            <label htmlFor='val'>val = </label>
            <input id="val" name="val" type="number" value={stateVal} onChange={(e) => setStateVal(Number(e.target.value))} />
            <label htmlFor='pow'>pow = </label>
            <input id="pow" name="pow" type="number" value={statePow} onChange={(e) => setStatePow(Number(e.target.value))} />

            <span>FUN = </span>
            <FunElement function={fun(stateVal, statePow)} />

            <span>MEMO = </span>
            <MemoElement function={memoizedFun} />

            <div>
                <button onClick={() => setRefresh(prev => !prev)}>Refresh component</button>
            </div>
        </div>
    )
}
