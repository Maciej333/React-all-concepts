import './Paths.style.scss';
import { Link, useLocation } from 'react-router-dom'

export default function Paths() {

    const location = useLocation();

    return (
        <div className='paths'>
            <nav>
                <Link to="/router/basic/absolute">Absolute path</Link>
                <Link to="relative">Relative path</Link>
            </nav>
            <span>Current path = </span>
            <span>{location.pathname}</span>
        </div>
    )
}
