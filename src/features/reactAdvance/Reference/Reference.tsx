import { createRef, useRef } from 'react';
import './Reference.style.scss';
import ReferenceForward from './ReferenceForward/ReferenceForward';

export default function Reference() {

    const spanRef = useRef<HTMLSpanElement>(null);
    const forwardRef = createRef<HTMLDivElement>();

    const handleClick = (color: string) => {
        if (spanRef.current?.style)
            spanRef.current.style.backgroundColor = color;
    }

    const handleForwardFocus = () => {
        forwardRef.current?.querySelector("input")?.focus();
    }

    const handleForwardClick = () => {
        const button = forwardRef.current?.querySelector("button");
        if (button) {
            button.disabled = false;
            button.click();
            button.disabled = true;
        }
    }

    return (
        <div className='reference'>
            <p>[ useRef ] Click button to change span 'Change me' background color</p>
            <span ref={spanRef}>Change me!</span>
            <div className='flex'>
                <button onClick={() => handleClick('red')}>Change to red</button>
                <button onClick={() => handleClick('transparent')}>Change to basic</button>
            </div>

            <p>[ createRef ] referance forwarding </p>
            <div className='flex'>
                <button onClick={handleForwardFocus}>Focus input</button>
                <button onClick={handleForwardClick}>Click btn</button>
            </div>
            <ReferenceForward ref={forwardRef} />
        </div>
    )
}
