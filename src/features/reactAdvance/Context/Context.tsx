import { ChangeEvent, useState } from 'react';
import './Context.style.scss';
import ContextChild from './ContextChild/ContextChild';
import ContextTheme from './ContextTheme/ContextTheme';
import { MyContext } from './myContext';
import { DARK, LIGHT, ThemeContext } from './themeContext';

export default function Context() {

    const [stateContext, setStateContext] = useState("context val from state");
    const [stateContextTheme, setStateContextTheme] = useState(LIGHT);

    const handleStateContext = (val: string) => {
        setStateContext(val);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setStateContext(value);
    }

    return (
        <div className='context'>
            <MyContext.Provider value={{ value: stateContext, setValue: handleStateContext }}>
                <span>[PARENT] stateContext = {stateContext}</span>
                <label htmlFor='parentContext'>Change context from parent component:</label>
                <input id="parentContext" name="parentContext" value={stateContext} onChange={handleChange}></input>

                <ContextChild />
            </MyContext.Provider>
            <ThemeContext.Provider value={stateContextTheme}>
                <p>EXAMPLE OF THEME CONTEXT</p>
                <label htmlFor='themeContext'>Theme = {stateContextTheme}</label>
                <div>
                    <button onClick={() => setStateContextTheme(LIGHT)}>Light theme</button>
                    <button onClick={() => setStateContextTheme(DARK)}>Dark theme</button>
                </div>
                <ContextTheme />
            </ThemeContext.Provider>
        </div >
    )
}
