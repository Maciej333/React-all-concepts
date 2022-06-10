import './StateAndProp.style.scss';
import { ReactNode, useState } from "react";

export default function StateAndProp(props: { children: ReactNode, propString: string, propNumber?: number }) {

    const { children, propString, propNumber } = props;
    const [stateString, setStateString] = useState("DANE");
    const [stateNumber, setStateNumber] = useState(12);
    const [stateObject, setStateObject] = useState({
        name: "Alina",
        age: 10
    })

    const handleClickString = (value: string) => {
        setStateString(value);
    }

    const handleClickNumber = (value: number) => {
        setStateNumber(value);
    }

    const handleClickObject = (value: { name: string, age: number }) => {
        setStateObject(value);
    }

    return (
        <div className="state-prop">
            <div className='state'>
                <span>State string = </span>
                <span>{stateString}</span>
                <button onClick={() => handleClickString("NOWE DANE")}>NEW</button>
                <button onClick={() => handleClickString("DANE")}>INIT</button>

                <span>State number = </span>
                <span>{stateNumber}</span>
                <button onClick={() => handleClickNumber(99)}>NEW</button>
                <button onClick={() => handleClickNumber(12)}>INIT</button>

                <span>State object = </span>
                <div>
                    <span>name = {stateObject.name}</span>
                    <br />
                    <span>age = {stateObject.age}</span>
                </div>
                <button onClick={() => handleClickObject({ name: "Tadeusz", age: 40 })}>NEW</button>
                <button onClick={() => handleClickObject({ name: "Alina", age: 10 })}>INIT</button>

            </div>
            <div className="props">
                <span>Prop String =</span>
                <span> {propString}</span>

                <span>Prop Number =</span>
                <span> {propNumber ? propNumber : "[UPS] value from parent not given"}</span>

                <span>Prop children</span>
                <div>
                    {children}
                </div>
            </div>
        </div >
    )
}
