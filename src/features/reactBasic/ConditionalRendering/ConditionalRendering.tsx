import { useState } from 'react';
import './ConditionalRendering.style.scss';

export default function ConditionalRendering() {

    const [state, setState] = useState(false);
    const [stateLogic] = useState({
        true1: "true1",
        true2: true,
        true3: 1,
        false1: '',
        false2: false,
        false3: 0
    })

    return (
        <div className='conditional-rendering'>
            <p>Ternary operator 'expr ? valTrue : valFalse'</p>
            <div>
                <span>{state ? "ternary true" : "ternary false"}</span>
                <button onClick={() => setState(prev => !prev)}>Change state</button>
            </div>

            <p>logical ||  [ first true OR last false ]</p>
            <div>
                <span>true1 || true2</span>
                <span>{stateLogic.true1 || stateLogic.true2}</span>

                <span>false1 || true1</span>
                <span>{stateLogic.false1 || stateLogic.true1}</span>

                <span>false1 || false2 || false3</span>
                <span>{stateLogic.false1 || stateLogic.false2 || stateLogic.false3}</span>
            </div>

            <p>logical &&  [ first false OR last true ]</p>
            <div>
                <span>false3 && false1</span>
                <span>{stateLogic.false3 && stateLogic.false1}</span>

                <span>true1 && false3</span>
                <span>{stateLogic.true1 && stateLogic.false3}</span>

                <span>true3 && true2 && true1</span>
                <span>{stateLogic.true3 && stateLogic.true2 && stateLogic.true1}</span>
            </div>
        </div>
    )
}
