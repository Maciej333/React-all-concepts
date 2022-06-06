import { useState } from 'react';
import { Memo } from './Memo/Memo';
import './MemoElement.style.scss';
import { NoMemo } from './NoMemo/NoMemo';

export default function MemoElement() {

    const [refreshParent, setRefreshParent] = useState(true);
    const [stateMemo, setStateMemo] = useState("memo data");
    const [stateNoMemo, setStateNoMemo] = useState("no memo data");

    return (
        <>
            <p>Open browser console, and change datas to see rendering difference</p>
            <div className='grid'>
                <button onClick={() => setRefreshParent(true)}>Parent show</button>
                <button onClick={() => setRefreshParent(false)}>Parent hide</button>

                <label htmlFor='memo-data'>Memo data:</label>
                <input id="memo-data" name="memo-data" value={stateMemo} onChange={(e) => setStateMemo(e.target.value)}></input>

                <label htmlFor='no-memo-data'>No memo data:</label>
                <input id="no-memo-data" name="no-memo-data" value={stateNoMemo} onChange={(e) => setStateNoMemo(e.target.value)}></input>
            </div>
            <div className='memo-element'>
                {
                    refreshParent ?
                        <>
                            <div>
                                <Memo data={stateMemo} />
                            </div>
                            <div>
                                <NoMemo data={stateNoMemo} />
                            </div>
                        </>
                        :
                        null
                }
            </div>
        </>

    )
}
