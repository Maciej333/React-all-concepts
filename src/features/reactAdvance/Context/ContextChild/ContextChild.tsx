import { Fragment, useContext } from "react"
import { MyContext } from "../myContext"

export default function ContextChild() {

    const { value, setValue } = useContext(MyContext);

    return (
        <Fragment>
            <span>[CHILD] stateContext = {value}</span>
            <label htmlFor="childContext">Change context from child component:</label>
            <input id="childContext" name="childContext" value={value} onChange={(e) => { setValue(e.target.value) }}></input>
        </Fragment>
    )
}
