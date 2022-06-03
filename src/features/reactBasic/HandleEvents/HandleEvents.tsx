import { MouseEvent, FocusEvent, useState, KeyboardEvent, ClipboardEvent, UIEvent } from 'react';
import './HandleEvents.style.scss';

export default function HandleEvents() {

    const [stateClick, setStateClick] = useState("");
    const [stateDoubleClick, setStateDoubleClick] = useState("");
    const [stateContextMenu, setStateContextMenu] = useState("");
    const [stateMouseEnter, setStateMouseEnter] = useState(false);
    const [stateDrag, setStateDrag] = useState("");

    const [stateFocus, setStateFocus] = useState(false);
    const [stateBlur, setStateBlur] = useState(false);

    const [stateKeyDown, setStateKeyDown] = useState("");
    const [stateKeyUp, setStateKeyUp] = useState("");

    const [stateCopy, setStateCopy] = useState("");
    const [stateCut, setStateCut] = useState("");
    const [statePaste, setStatePaste] = useState("");

    const [stateScroll, setStateScroll] = useState("");

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        setStateClick(`click [${e.clientX} ${e.clientY}]`)
    }

    const handleDoubleCLick = (e: MouseEvent<HTMLButtonElement>) => {
        setStateDoubleClick(`double [${e.pageX} ${e.pageY}]`)
    }

    const handleContextMenu = (e: MouseEvent<HTMLParagraphElement>) => {
        setStateContextMenu(`context ${e.type}`)
    }

    const handleMouseEnter = (e: MouseEvent<HTMLParagraphElement>) => {
        setStateMouseEnter(prev => !prev)
    }

    const handleDrag = (e: MouseEvent<HTMLParagraphElement>) => {
        setStateDrag(`drag ${e.target}`)
    }

    const handleFocus = (e: FocusEvent<HTMLParagraphElement>) => {
        setStateFocus(prev => !prev)
    }

    const handleBlur = (e: FocusEvent<HTMLParagraphElement>) => {
        setStateBlur(prev => !prev)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        setStateKeyDown(`Key down = ${e.code}`)
    }

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        setStateKeyUp(`Key down = ${e.code}`)
    }

    const handleCopy = (e: ClipboardEvent<HTMLInputElement>) => {
        setStateCopy(`copy `)
    }

    const handleCut = (e: ClipboardEvent<HTMLInputElement>) => {
        setStateCut(`cut `)
    }

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        setStatePaste(`paste `)
    }

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        setStateScroll(`scroll ${e.type}`)
    }

    return (
        <div className='handle-events'>
            <span className='header'>Event</span>
            <span className='header'>State</span>
            <span className='header'>Actions</span>

            <p>Mouse events</p>
            <span>Click</span>
            <span>{stateClick}</span>
            <div>
                <button onClick={handleClick}>Click</button>
            </div>

            <span>Double click</span>
            <span>{stateDoubleClick}</span>
            <div>
                <button onDoubleClick={handleDoubleCLick}>Double click</button>
            </div>

            <span>Context menu</span>
            <span>{stateContextMenu}</span>
            <div>
                <p onContextMenu={handleContextMenu}>Right click</p>
            </div>

            <span>Mouse enter</span>
            <span>{stateMouseEnter ? "true" : "false"}</span>
            <div>
                <p onMouseEnter={handleMouseEnter} style={{ "backgroundColor": stateMouseEnter ? "blue" : "none" }}>Mouse enter</p>
            </div>

            <span>Drag </span>
            <span>{stateDrag}</span>
            <div>
                <p draggable="true" onDrag={handleDrag}>Drag me!</p>
            </div>

            <span>more... </span>
            <span></span>
            <div></div>

            <p>Focus blur events</p>
            <span>Focus</span>
            <span style={{ "backgroundColor": stateFocus ? "red" : "none" }}>focus</span>
            <div>
                <input onFocus={handleFocus} placeholder="Focus"></input>
            </div>

            <span>Blur</span>
            <span style={{ "backgroundColor": stateBlur ? "green" : "none" }}>Blur</span>
            <div>
                <input onBlur={handleBlur} placeholder="Blur"></input>
            </div>

            <p>Keyboard events</p>
            <span>Key down</span>
            <span>{stateKeyDown}</span>
            <div>
                <input onKeyDown={handleKeyDown} placeholder="Give me KEY"></input>
            </div>

            <span>Key up</span>
            <span>{stateKeyUp}</span>
            <div>
                <input onKeyUp={handleKeyUp} placeholder="Give me KEY"></input>
            </div>

            <p>Clipboard events</p>
            <span>copy</span>
            <span>{stateCopy}</span>
            <div>
                <input onCopy={handleCopy} value="COPY VAL" onChange={() => { }}></input>
            </div>

            <span>cut</span>
            <span>{stateCut}</span>
            <div>
                <input onCut={handleCut} value="CUT VAL" onChange={() => { }}></input>
            </div>

            <span>paste</span>
            <span>{statePaste}</span>
            <div>
                <input onPaste={handlePaste} value="PASTE VAL" onChange={() => { }}></input>
            </div>

            <p>Scroll events</p>
            <span>scroll</span>
            <span>{stateScroll}</span>
            <div className='scroll-div-container' onScroll={handleScroll}>
                <div className='scroll-div'></div>
            </div>

            <p>Form events BELOW</p>
        </div>
    )
}
