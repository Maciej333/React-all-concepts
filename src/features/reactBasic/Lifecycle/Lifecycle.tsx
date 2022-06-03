import { useEffect, useState } from "react"
import Destroy from "./Destroy/Destroy";
import './Lifecycle.style.scss';

export default function Lifecycle() {

    const [initState, setInitState] = useState("default state");
    const [changeState, setChangeState] = useState(true);
    const [changeStateNumber, setChangeStateNumber] = useState(0);
    const [destroy, setDestroy] = useState(true);
    const [destroyState, setDestroyState] = useState("element in")

    useEffect(() => {
        setInitState("on init state")
    }, [])

    useEffect(() => {
        setChangeStateNumber(prev => {
            return prev + 1;
        })
    }, [changeState])

    const handleChangeState = () => {
        setChangeState(prev => !prev);
    }

    const addElement = () => {
        setDestroy(true);
    }

    return (
        <div className="lifecycle">
            <span>Init state = </span>
            <span>{initState}</span>
            <span></span>

            <span>Change state = </span>
            <span>{changeStateNumber}</span>
            <button onClick={handleChangeState}>Change</button>

            <span>Destroy state = </span>
            <span>{destroyState}</span>
            <div>
                <button onClick={addElement}>ADD</button>
                <button onClick={() => setDestroy(false)}>DELETE</button>
            </div>

            <div className="destroy-element">
                {
                    destroy ?
                        <Destroy setParentState={setDestroyState} />
                        :
                        <span>Nothing to show, click' ADD'</span>
                }
            </div>
        </div>
    )
}
