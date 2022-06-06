import './Location.style.scss';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

interface State {
    data: string
}

export default function Location() {

    const location = useLocation();
    const state = location.state as State;

    return (
        <div className="location">
            <nav>
                <Link to="newPathname">New pathname</Link>
                <Link to="state" state={{ data: "Value from link state" }}>State</Link>
            </nav>
            <span>Pathname: </span>
            <span>{location.pathname}</span>

            <span>State: </span>
            <span>{state?.data ? state.data : "No state to show"}</span>
        </div>
    )
}
