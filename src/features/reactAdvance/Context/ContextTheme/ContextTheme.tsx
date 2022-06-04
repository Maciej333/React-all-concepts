import { useContext } from 'react';
import { ThemeContext } from '../themeContext';
import './ContextTheme.style.scss';

export default function ContextTheme() {

    const theme = useContext(ThemeContext);

    return (
        <div className={"context-theme "+theme}>ContextTheme</div>
    )
}
