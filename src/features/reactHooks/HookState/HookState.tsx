import './HookState.style.scss';
import { ChangeEvent, useState } from 'react'

export default function HookState() {

    const [stateNumber, setStateNumber] = useState(0)
    const [stateString, setStateString] = useState("")
    const [stateTab, setStateTab] = useState(["El_1", "El_2"])
    const [stateObject, setStateObject] = useState({
        country: "Poland",
        city: "Warsaw"
    })

    const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setStateNumber(Number(value));
    }

    const handleString = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setStateString(value);
    }

    const handleTab = (index: number, value: string) => {
        setStateTab(prev => {
            const newTab = [...prev];
            newTab[index] = value;
            return newTab;
        })
    }

    const handleObject = (name: string, value: string) => {
        setStateObject(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div className='hook-state'>
            <span>Number =</span>
            <span>{stateNumber}</span>
            <div>
                <label htmlFor='stateNumber'>Number:</label>
                <input id="stateNumber" name="stateNumber" type="number" value={stateNumber} onChange={handleNumber}></input>
            </div>

            <span>String =</span>
            <span>{stateString}</span>
            <div>
                <label htmlFor='stateString'>String:</label>
                <input id="stateString" name="stateString" value={stateString} onChange={handleString}></input>
            </div>

            <span>Tab =</span>
            <span>
                {
                    stateTab.map((el, index) => {
                        return <>
                            <span>{`${index} = ${el}`}</span>
                            <br />
                        </>
                    })
                }
            </span>
            <div>
                {
                    stateTab.map((el, index) => {
                        return <>
                            <label htmlFor={`[TAB] ${index}`}>{index}=</label>
                            <input
                                id={`[TAB] ${index}`}
                                name={`[TAB] ${index}`}
                                value={el}
                                onChange={(e) => handleTab(index, e.target.value)}
                            ></input>
                        </>
                    })
                }
            </div>

            <span>Object =</span>
            <span>
                {
                    Object.entries(stateObject).map(el => {
                        return <>
                            <span>{`${el[0]}: ${el[1]}`}</span>
                            <br />
                        </>;
                    })
                }
            </span>
            <div>
                {
                    Object.entries(stateObject).map((el, index) => {
                        return <>
                            <label htmlFor={el[0]}>{el[0]}=</label>
                            <input
                                id={el[0]}
                                name={el[0]}
                                value={el[1]}
                                onChange={(e) => handleObject(el[0], e.target.value)}
                            ></input>
                        </>
                    })
                }
            </div>
        </div>
    )
}
