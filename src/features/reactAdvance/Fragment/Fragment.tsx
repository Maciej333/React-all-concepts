import React, { useState } from 'react';
import './Fragment.style.scss';

export default function Fragment() {

    const [stateTab] = useState(["EL_1", "EL_2", "EL_3"])

    return (
        <div className='fragment'>
            <p>Tab element </p>
            {
                stateTab.map(element => {
                    return <React.Fragment key={element}>
                        <span>Tab el = </span>
                        <span>{element}</span>
                    </React.Fragment>
                })
            }

            <p>Fragment children</p>
            <>
                <span>Element 1 in fragment</span>
                <span>Element 2 in fragment</span>
            </>

            <p>Div children</p>
            <div>
                <span>Element 1 in div</span>
                <span>Element 2 in div</span>
            </div>
        </div>
    )
}
