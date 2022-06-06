import { useLocation, useNavigate } from 'react-router-dom';
import './Navigation.style.scss';

interface State {
    data: string
}

export default function Navigation() {

    const location = useLocation();
    const state = location.state as State;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/router/basic/button");
    }

    const handleDivClick = () => {
        navigate("/router/basic/div", { state: { data: "From navigation state !" } });
    }

    return (
        <div className='navigation'>
            <span>pathname:</span>
            <span>{location.pathname}</span>

            <span>pathname:</span>
            <span>{state?.data ? state.data : "no state to show"}</span>

            <span>Click right button to force navigate</span>
            <button onClick={handleClick}>Force nav!</button>

            <span>Click right div to force state navigation</span>
            <div className='div-btn' onClick={handleDivClick} >Wow by click U force to send state</div>
        </div>
    )
}
