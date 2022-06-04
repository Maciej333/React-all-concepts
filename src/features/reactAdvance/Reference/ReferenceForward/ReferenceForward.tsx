import './ReferenceForward.style.scss';
import React, { forwardRef, useState } from 'react';

const ReferenceForward = forwardRef<HTMLDivElement>((props, ref) => {
    const [state, setState] = useState("no click");

    const handleClick = () => {
        setState(prev => {
            const returnVal = prev === "no click" ?
                "YES, U clicked ME!"
                :
                "no click";
            return returnVal;
        })
    }

    return (
        <div className='reference-focus' ref={ref}>
            <span>Input to focus</span>
            <input placeholder='Focus Me!'></input>
            <span>Forward state = '{state}'</span>
            <span className="btn-wrapper" onClick={handleClick}>
                <button onClick={() => { }} disabled>Force me to click!</button>
            </span>
        </div>
    )
})

export default ReferenceForward;